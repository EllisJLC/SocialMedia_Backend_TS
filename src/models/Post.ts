const mongoose = require('mongoose');

const {ObjectId} = mongoose.Schema;

const postSchema = new mongoose.Schema({
  content: {
    type: String,
    trim: true,
    required: true
  },
  postedBy: {
    type: ObjectId,
    ref: 'User',
    trim: true
  },
  email: {
    type: String,
    required: true,
    unique: true
  },
  likes: [{ type: ObjectId, ref: 'User' }]
})

module.exports = mongoose.model('Post', postSchema)