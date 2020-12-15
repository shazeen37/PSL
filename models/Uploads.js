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
    status: {
      type: String,
      default: 'pending',
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
