const mongoose = require('mongoose');

// Define the schema for the blog post
const BlogPostSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true
  },
  content: {
    type: String,
    required: true
  },
  author: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
    required: true
  },
  imageurl: {
    type: String, // Assuming you are storing the image URL as a string
    required: true
  },
  createdAt: {
    type: Date,
    default: Date.now
  },
  updatedAt: {
    type: Date,
    default: Date.now
  }
});
const BlogModel = mongoose.model('Blog', BlogPostSchema);

module.exports={BlogModel}