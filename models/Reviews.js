const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const ReviewSchema = new Schema(
    {
        editor: {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'user',
            required: true
        },
        gesture: {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'upload',
            required: true
        },
        shape: {
            type: Number,
            enum: [1, 2, 3, 4, 5]
        },
        location: {
            type: Number,
            enum: [1, 2, 3, 4, 5]
        },
        features: {
            type: Number,
            enum: [1, 2, 3, 4, 5]
        },
        orientation: {
            type: Number,
            enum: [1, 2, 3, 4, 5]
        },
        movement: {
            type: Number,
            enum: [1, 2, 3, 4, 5]
        },
        decision: {
            type: String,
            enum: ['Accept', 'Reject', 'Pending'],
            default: 'Pending'
        },
        scale: {
            type: Number,
            enum: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
        },
        comments: {
            type: String
        },
        reviewDate: {
            type: Date
        },
        date: {
            type: Date,
            default: Date.now
        }
    },
    {
        collection: 'Review',
    }
);

module.exports = mongoose.model('review', ReviewSchema);
