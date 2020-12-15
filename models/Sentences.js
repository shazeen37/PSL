const mongoose = require('mongoose');

const EsentenceSchema = new mongoose.Schema({
    sentenceKey: {
        type: String,
        required: true,
        index: true
    },
    sentence: {
        type: String,
        required: true,
    },
    day: {
        type: String,
        required: true,
        enum: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday']
    },
    translations: [
        {
            type: String
        }
    ]
});

module.exports = Esentence = mongoose.model('esentence', EsentenceSchema);
