
const mongoose = require("mongoose");


const PostSchema = new mongoose.Schema({
    title: { type: String, required: true },
    content: { type: String, required: true },
    user: { type: mongoose.Schema.Types.ObjectId, ref: 'userdata', required: true },
    category: { type: String,required: true },
    created_at: { type: Date, default: Date.now },
    updated_at: { type: Date, default: Date.now }
  });


  
const PostModel = mongoose.model("blogpost", PostSchema);

module.exports = {PostModel};
