var mongoose = require("mongoose");

const postSchema = mongoose.Schema({
  content: {
    type: String,
    trim: true
  },
  created_at: {
    type: Date,
    default: Date()
  }
});
const Post = mongoose.model("Post", postSchema);
module.exports = Post;
