const express = require('express');
const { check, validationResult } = require('express-validator');

const router = express.Router();

const Sentence = require('../../models/Sentences');
const weekDays = require('../../utils/weekDays');

router.post('/', [check('sentence', 'Sentence is required').not().isEmpty()], async (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        return res.status(400).json({ errors: errors.array() });
    }

    try {
        req.body.sentenceKey = req.body.sentence.toLowerCase();
        const sentence = await Sentence.findOne({ sentenceKey: req.body.sentenceKey });
        if (sentence) {
            res.status(409).send('Sentence already exist');
            return;
        }

        req.body.day = weekDays.DAY_NAMES[new Date().getDay()];
        const newSentence = new Sentence(req.body);
        let response = await newSentence.save();
        res.json(response);
    } catch (err) {
        console.error(err.message);
        res.status(500).send('Server Error');
    }
});

// Get all sentences
router.get('/', async (req, res) => {
    try {
        const sentences = await Sentence.find({});
        res.json(sentences);
    } catch (err) {
        console.error(err.message);
        res.status(500).send('Server Error');
    }
});

// Get sentence by sentence key
router.get('/:sentence', [check('sentence', 'Sentence is required').not().isEmpty()], async (req, res) => {
    try {
        let query = {
            sentenceKey: req.params.sentence.toLowerCase()
        };

        const sentence = await Sentence.findOne(query);
        if (!sentence) {
            res.status(404).send('Sentence not found');
            return;
        }

        res.json(sentence);
    } catch (err) {
        console.error(err.message);
        res.status(500).send('Server Error');
    }
});

// Update translations by sentence key
router.put('/:sentence', [check('sentence', 'Sentence is required').not().isEmpty()], async (req, res) => {
    try {
        console.log('Hello API')
        let query = {
            sentenceKey: req.params.sentence.toLowerCase()
        };

        const sentence = await Sentence.findOne(query);
        if (!sentence) {
            res.status(404).send('Sentence not found');
            return;
        }

        if (req.body.translation) {
            sentence.translations.push(req.body.translation);
        }

        const response = await sentence.save();
        res.json(response);
    } catch (err) {
        console.error(err.message);
        res.status(500).send('Server Error');
    }
});

// Delete translations by sentence key
router.delete('/:sentence', [check('sentence', 'Sentence is required').not().isEmpty()], async (req, res) => {
    try {
        let query = {
            sentenceKey: req.params.sentence.toLowerCase()
        };

        const sentence = await Sentence.deleteOne(query);
        res.status(200).send('Sentence deleted successfully!!!');
    } catch (err) {
        console.error(err.message);
        res.status(500).send('Server Error');
    }
});

// Get a random sentence related to a day
router.get('/daily/random', async (req, res) => {
    try {
        let query = {
            day: weekDays.DAY_NAMES[new Date().getDay()]
        };

        const sentences = await Sentence.find(query);
        if (!sentences || sentences.length === 0) {
            res.json({});
            return;
        }
     

        let index = Math.floor(Math.random() * ((sentences.length - 1) - 0 + 1) + 0);
       
        res.json(sentences[index]);
    } catch (err) {
        console.error(err.message);
        res.status(500).send('Server Error');
    }
});

module.exports = router;
