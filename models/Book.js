const mongoose = require('mongoose');
const BookSchema = new mongoose.Schema(
  {
    title: {
      type: String,
    },
    description: {
      type: String,
    },
    cover: {
      type: String,
    },

    author: {
      type: String,
    },
    category: {
      type: String,
    },
    noISBN: {
      type: String,
    },
    year: {
      type: Date,
    },
  },
  {
    collection: 'Book',
  }
);
module.exports = mongoose.model('Book', BookSchema);
