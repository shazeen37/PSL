const mongoose = require('mongoose');

const UserSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
  },
  password: {
    type: String,
    required: true,
  },
  avatar: {
    type: String,
    enum: ['//www.gravatar.com/avatar/94338554995a71496ab3870fe9505622?s=200&r=pg&d=mm']
  },
  type: {
    type: String,
    default: 'contributer',
    enum: ['contributer', 'editor'],
    default: 'contributer'
  },
  status: {
    type: String,
    default: 'available'
  },
  date: {
    type: Date,
    default: Date.now,
  },
});

module.exports = User = mongoose.model('user', UserSchema);
