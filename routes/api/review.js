const express = require('express');
const router = express.Router();

const { check, validationResult } = require('express-validator');

const Review = require('../../models/Reviews');

//@route Post api/review
//desc post route
//@access Public
router.post('/', [check('editor', 'Editor id is required').not().isEmpty(),
check('gesture', 'Upload id is required').not().isEmpty(),
check('shape', 'Shape rating is required').not().isEmpty(),
check('location', 'Location rating is required').not().isEmpty(),
check('features', 'Features rating is required').not().isEmpty(),
check('orientation', 'Orientation rating is required').not().isEmpty(),
check('movement', 'Movement rating is required').not().isEmpty(),
check('scale', 'Scale rating is required').not().isEmpty(),
check('decision', 'decision is required and it should be Accept or Reject').not().isEmpty().custom(decision => { return (decision === 'Accept' || decision === 'Reject') ? true : false; })], async (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        return res.status(400).json({ errors: errors.array() });
    }

    try {
        let review = await Review.findOne({ editor: req.body.editor, gesture: req.body.gesture });
        if (!review) {
            return res.status(400).json({ errors: [{ msg: 'Review not found' }] });
        }

        review.shape = req.body.shape;
        review.location = req.body.location;
        review.features = req.body.features;
        review.orientation = req.body.orientation;
        review.movement = req.body.movement;
        review.scale = req.body.scale;
        review.decision = req.body.decision;
        review.comments = req.body.comments;
        review.reviewDate = new Date();

        await review.save();
        return res.status(200).send('Review saved successfully');
    } catch (err) {
        console.error(err.message);
        res.status(500).send('Server err');
    }
});

module.exports = router;
