const mongoose =require("mongoose");

const postSchema = require("./schema")
 
const Post = mongoose.model("Posts",postSchema);

module.exports = Post;
