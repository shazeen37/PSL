const express = require('express');
const router = express.Router();
const { check, validationResult } = require('express-validator');
const auth = require('../../middleware/auth');
const Users = require('../../models/Users');
const Dictionary = require('../../models/Dictionary');
const Upload = require('../../models/Uploads');

router.post(
  '/',
  [auth, [check('status', 'Text is required').not().isEmpty()]],
  async (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }

    try {
      const user = await Users.findById(req.user.id).select('-password');
      const upload = await Upload.findOne({ status: 'pending' });
      upload.status = req.body.status;
      const newDictionary = new Dictionary({
        user: req.user.id,
        upload: upload,
      });
      console.log(newDictionary);
      upload.save();
      const word = await newDictionary.save();
      res.json(word);
    } catch (err) {
      console.error(err.message);
      res.status(500).send('Server Error');
    }
  }
);

//search

router.get('/search/:word', async (req, res) => {
  try {
    console.log(req.params.word);
    const word = await Upload.find({
      gestureName: req.params.word,
      status: 'Approved',
    });
    res.json(word);
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server Error');
  }
});
//search by category
router.get('/search/Food', async (req, res) => {
  try {
    const word = await Upload.find({
      category: 'Food',
    });
    res.json(word);
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server Error');
  }
});
module.exports = router;
