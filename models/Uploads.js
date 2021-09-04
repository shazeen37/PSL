const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const UploadSchema = new Schema(
  {
    user: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'user',
    },
    video: {
      type: String,
    },
    gestureName: {
      type: String,
    },
    category: {
      type: String,
      default: 'general',
    },
    Region: {
      type: String,
      default: 'punjab',
    },
    status: {
      type: String,
      default: 'Pending',
    },
    rating: {
      type: Number,
      enum: [1, 2, 3, 4, 5],
      default: 1
    },
    date: {
      type: Date,
      default: Date.now,
    },
  },
  {
    collection: 'Upload',
  }
);

module.exports = mongoose.model('upload', UploadSchema);
