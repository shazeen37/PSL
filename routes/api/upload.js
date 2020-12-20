let express = require('express'),
  multer = require('multer'),
  mongoose = require('mongoose'),
  uuidv4 = require('uuid/v4'),
  router = express.Router();
let uploads = require('../../models/Uploads');
const auth = require('../../middleware/auth');
const DIR = '../../public/';
let path = require('path');
const Users = require('../../models/Users');
const { check, validationResult } = require('express-validator');

const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, path.resolve(__dirname, '../../public/'));
  },
  filename: (req, file, cb) => {
    const fileName = file.originalname.toLowerCase().split(' ').join('-');
    cb(null, uuidv4() + '-' + fileName);
  },
});

var upload = multer({
  storage: storage,
  fileFilter: (req, file, cb) => {
    if (
      file.mimetype == 'video/mp4' ||
      file.mimetype == 'Video/mpg' ||
      file.mimetype == 'video/avi'
    ) {
      cb(null, true);
    } else {
      cb(null, false);
      return cb(new Error('Only .mp4, .mpg and .avi format allowed!'));
    }
  },
});

// uploads

router.post('/', auth, upload.single('video'), async (req, res, next) => {
  const url = req.protocol + '://' + req.get('host');
  const user = await Users.findById(req.user.id).select('-password');

  const userupload = new uploads({
    user: req.user.id,

    gestureName: req.body.gestureName,
    video: url + '/public/' + req.file.filename,
  });

  userupload
    .save()
    .then((result) => {
      res.status(201).json({
        message: 'uploads successfully!',
        useruploadCreated: {
          user: result.user,

          video: result.video,
          gestureName: result.gestureName,
        },
      });
    })

    .catch((err) => {
      console.error(err);
      res.status(500).json({
        error: err,
      });
    });
});

//get all Uploads
router.get('/', async (req, res, next) => {
  try {
    const Uploads = await uploads.find().sort({ date: -1 });
    res.json(Uploads);
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server Error');
  }
});
router.get('/indiviual', async (req, res) => {
  try {
    const upload = await uploads.findOne({ status: 'pending' });

    if (!upload) {
      return res.status(404).json({
        msg: 'upload not found',
      });
    }
    res.json(upload);
  } catch (err) {
    console.error(err.message);
    if (err.kind === 'ObjectId') {
      return res.status(404).json({
        msg: 'upload not found',
      });
    }
    res.status(500).send('Server Error');
  }
});

//get user uploads
router.get('/:id', auth, async (req, res) => {
  try {
    const Uploads = await uploads.findById(req.params.id);
    if (!Uploads) {
      return res.status(404).json({
        msg: 'Uploads not found',
      });
    }
    res.json(Uploads);
  } catch (err) {
    console.error(err.message);
    if (err.kind === 'ObjectId') {
      return res.status(404).json({
        msg: 'Uploads not found',
      });
    }
    res.status(500).send('Server Error');
  }
});

module.exports = router;
