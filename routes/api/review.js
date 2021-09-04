const express = require('express');
const router = express.Router();

const { check, validationResult } = require('express-validator');
const auth = require('../../middleware/auth');

const Review = require('../../models/Reviews');
const Upload = require('../../models/Uploads');

//@route Post api/review
//desc post route
//@access Public
router.post('/', auth,
check('uploadId', 'Upload id is required').not().isEmpty(),
check('shape', 'Shape rating is required').not().isEmpty(),
check('location', 'Location rating is required').not().isEmpty(),
check('features', 'Features rating is required').not().isEmpty(),
check('orientation', 'Orientation rating is required').not().isEmpty(),
check('movement', 'Movement rating is required').not().isEmpty(),
check('scale', 'Scale rating is required').not().isEmpty(),
check('decision', 'Decision is required and it should be Accept or Reject').not().isEmpty().custom(decision => { return (decision === 'accept' || decision === 'reject') ? true : false; }),
async (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        return res.status(400).json({ errors: errors.array() });
    }

    try {
        let review = await Review.findOne({ editor: req.user.id, gesture: req.body.uploadId });
        let upload = await Upload.findOne({ _id: req.body.uploadId });
        if (review) {
            return res.status(400).json({ errors: [{ msg: 'Review already submitted' }] });
        }
        if (!upload) {
            return res.status(400).json({ errors: [{ msg: 'Gesture not found' }] });
        }

        review = new Review({
            editor: req.user.id,
            gesture: req.body.uploadId,
            shape: req.body.shape,
            location: req.body.location,
            features: req.body.features,
            orientation: req.body.orientation,
            movement: req.body.movement,
            scale: req.body.scale,
            decision: req.body.decision === 'accept' ? 'Accept' : 'Reject',
            comments: req.body.comments,
            reviewDate: new Date()
        });

        upload.status = req.body.decision === 'accept' ? 'Approved' : 'Rejected';
        await review.save();
        await upload.save();
        return res.status(200).send('Review saved successfully');
    } catch (err) {
        console.error(err.message);
        res.status(500).send('Server err');
    }
});

module.exports = router;
