const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const DictionarySchema = new Schema(
  {
    user: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'user',
    },
    upload: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'upload',
    },
    date: {
      type: Date,
      default: Date.now,
    },
  },
  {
    collection: 'Dictionary',
  }
);

module.exports = mongoose.model('Dictionary', DictionarySchema);
