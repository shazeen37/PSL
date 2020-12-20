const express = require('express');
const router = express.Router();
const gravatar = require('gravatar');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const nodemailer = require('nodemailer');
const config = require('config');

const { check, validationResult } = require('express-validator');

const User = require('../../models/Users');

//@route Post api/user
//desc post route
//@access Public
router.post(
  '/',
  [
    check('name', 'Name is required')
      .not()
      .isEmpty(),
    check('email', 'Please include a valid email').isEmail(),
    check(
      'password',
      'Please enter a password with 6 or more charcters'
    ).isLength({ min: 6 })
  ],
  async (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }

    const { name, email, password } = req.body;

    try {
      let user = await User.findOne({ email });

      if (user) {
        return res.status(400).json({ errors: [{ msg: 'User already exists' }] });
      }

      //see if User exists
      //Get users gravatar
      const avatar = gravatar.url(email, {
        s: '200',
        r: 'pg',
        d: 'mm'
      });
      user = new User({
        name,
        email,
        avatar,
        password
      });

      const salt = await bcrypt.genSalt(10);
      user.password = await bcrypt.hash(password, salt);

      await user.save();

      //Encrypt password
      //Return jsonwebtoken
      const payload = {
        user: {
          id: user.id
        }
      };
      jwt.sign(
        payload,
        config.get('jwtSecret'),
        { expiresIn: 360000 },
        (err, token) => {
          if (err) throw err;
          res.json({ token });
        }
      );
    } catch (err) {
      console.error(err.message);
      res.status(500).send('Server err');
    }
  }
);

//@route Post api/auth
//desc Authentication of user & get token
//@access Public
//forgot
router.post('/forgot-password', [check('email', 'Please include a valid email').isEmail()], async (req, res) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(400).json({ errors: errors.array() });
  }

  const { email } = req.body;
  try {
    let user = await User.findOne({ email });
    if (!user) {
      return res.status(400).json({ errors: [{ msg: 'Email not found' }] });
    }

    const token = jwt.sign({ email: user.email }, 'pslsupport', { expiresIn: '24h' });
    //set email password and service to send email
    const transporter = nodemailer.createTransport({
      service: 'gmail',
      secure: false,
      auth: {
        user: process.env.EMAIL_ADDRESS,
        pass: process.env.EMAIL_PASSWORD
      }
    });

    const mailOptions = {
      from: 'learnwithus03@gmail.com',
      to: email,
      subject: 'PSL!!! Link To Reset Password',
      html: `<!doctype html>  <html lang="en-US">

       <head>
           <meta content="text/html; charset=utf-8" http-equiv="Content-Type" />
           <title>Reset Password Email Template</title>
           <meta name="description" content="Reset Password Email Template.">
           <style type="text/css">
               a:hover {text-decoration: underline !important;}
           </style>
           <script src="https://kit.fontawesome.com/a076d05399.js"></script>
       </head>
       
       <body marginheight="0" topmargin="0" marginwidth="0" style="margin: 0px; background-color: #f2f3f8;" leftmargin="0">
           <!--100% body table-->
           <table cellspacing="0" border="0" cellpadding="0" width="100%" bgcolor="#f2f3f8"
               style="@import url(https://fonts.googleapis.com/css?family=Rubik:300,400,500,700|Open+Sans:300,400,600,700); font-family: 'Open Sans', sans-serif;">
               <tr>
                   <td>
                       <table style="background-color: #f2f3f8; max-width:670px;  margin:0 auto;" width="100%" border="0"
                           align="center" cellpadding="0" cellspacing="0">
                           <tr>
                               <td style="height:80px;">&nbsp;</td>
                           </tr>
                           <tr>
                               <td style="text-align:center;">
                                 <a >
                                 <i class="fas fa-pizza-slice"></i>
                                 </a>
                               </td>
                           </tr>
                           <tr>
                               <td style="height:20px;">&nbsp;</td>
                           </tr>
                           <tr>
                               <td>
                                   <table width="95%" border="0" align="center" cellpadding="0" cellspacing="0"
                                       style="max-width:670px;background:#fff; border-radius:3px; text-align:center;-webkit-box-shadow:0 6px 18px 0 rgba(0,0,0,.06);-moz-box-shadow:0 6px 18px 0 rgba(0,0,0,.06);box-shadow:0 6px 18px 0 rgba(0,0,0,.06);">
                                       <tr>
                                           <td style="height:40px;">&nbsp;</td>
                                       </tr>
                                       <tr>
                                           <td style="padding:0 35px;">
                                               <h1 style="color:#1e1e2d; font-weight:500; margin:0;font-size:32px;font-family:'Rubik',sans-serif;"> Reset Password Email</h1>
                                               <span
                                                   style="display:inline-block; vertical-align:middle; margin:29px 0 26px; border-bottom:1px solid #cecece; width:100px;"></span>
                                               <p style="color:#455056; font-size:15px;line-height:24px; margin:0;">
                                               You are receiving this because you (or someone else) have requested the reset of the password for your account.
                                               Please click the button below to reset your password
                                               </p>
                                               <a href="http://localhost:3000/resetpassword?token=${token}"
                                                   style="background:#20e277;text-decoration:none !important; font-weight:500; margin-top:35px; color:#fff;text-transform:uppercase; font-size:14px;padding:10px 24px;display:inline-block;border-radius:50px;">Reset
                                                   Password</a>
                                           </td>
                                       </tr>
                                       <tr>
                                           <td style="height:40px;">&nbsp;</td>
                                       </tr>
                                   </table>
                               </td>
                           <tr>
                               <td style="height:20px;">&nbsp;</td>
                           </tr>
                           <tr>
                               <td style="text-align:center;">
                                   <p style="font-size:14px; color:rgba(69, 80, 86, 0.7411764705882353); line-height:18px; margin:0 0 0;">&copy; <strong>www.psl.com</strong></p>
                               </td>
                           </tr>
                           <tr>
                               <td style="height:80px;">&nbsp;</td>
                           </tr>
                       </table>
                   </td>
               </tr>
           </table>
           <!--/100% body table-->
       </body>
       
        </html>`
    };
    transporter.sendMail(mailOptions, (err, response) => {
      if (err) {
        console.error('there was an error: ', err);
        throw err;
      } else {
        res.status(200).json({ message: 'Recovery email sent' });
      }
    });
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server err');
  }
});

router.post('/reset/:token', async (req, res) => {
  const { password } = req.body;
  try {
    jwt.verify(req.params.token, 'pslsupport', async function(err, decoded) {
      if (err) {
        console.error(err.message);
        res.status(400).json({ errors: [{ msg: 'Token is not valid' }] });
      }
      else if (decoded) {
        let user = await User.findOne({ email: decoded.email });
        if (!user) {
          return res.status(400).json({ errors: [{ msg: 'Email not found' }] });
        }

        const salt = await bcrypt.genSalt(10);
        user.password = await bcrypt.hash(password, salt);

        await user.save();
        return res.status(200).send('Password reset successfully');
      }
    });
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Token is expired and is not valid any more');
  }
});

module.exports = router;
