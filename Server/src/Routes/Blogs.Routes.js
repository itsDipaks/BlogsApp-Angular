let {Router} = require("express");
const { Authenticate } = require("../Middleware/Auth.middleware");
const { BlogModel } = require("../Schema/Blog.schema");

let BlogRouter=Router()

BlogRouter.get('/allblogs', async (req, res) => {
    try {
      const allBlogs = await BlogModel.find();
      res.status(200).send({data:allBlogs});
    } catch (err) {
      console.error(err);
      res.status(500).json({ message: 'Internal Server Error' });
    }
  });


  BlogRouter.post("/add",Authenticate,async(req,res)=>{
    let {title,content,user_id,imageurl,Category}=req.body
    try {
        const BlogPost = new BlogModel({
          title,
          content,
          imageurl,
          author:user_id,
          Category
        });
        await BlogPost.save();
        res.status(200).send({msg: "Blog Has been Added"});
      } catch (err) {
        res.status(400).json({mag: "Something Wents wront please check filelds"});
      }
})

// GET a single blog by ID
BlogRouter.get('/blogs/:id', async (req, res) => {
    try {
      const blog = await BlogModel.findById(req.params.id);
      if (!blog) {
        return res.status(404).json({ message: 'Blog not found' });
      }
      res.json(blog);
    } catch (err) {
      console.error(err);
      res.status(500).json({ message: 'Internal Server Error' });
    }
  });
  
  // UPDATE a blog by ID
  BlogRouter.put('/blogs/:id', async (req, res) => {
    try {
      const updatedBlog = await BlogModel.findByIdAndUpdate(
        req.params.id,
        req.body,
        { new: true }
      );
      if (!updatedBlog) {
        return res.status(404).json({ message: 'Blog not found' });
      }
      res.json(updatedBlog);
    } catch (err) {
      console.error(err);
      res.status(500).json({ message: 'Internal Server Error' });
    }
  });
  
  // DELETE a blog by ID
  BlogRouter.delete('/blogs/:id', async (req, res) => {
    try {
      const deletedBlog = await BlogModel.findByIdAndRemove(req.params.id);
      if (!deletedBlog) {
        return res.status(404).json({ message: 'Blog not found' });
      }
      res.json({ message: 'Blog deleted successfully' });
    } catch (err) {
      console.error(err);
      res.status(500).json({ message: 'Internal Server Error' });
    }
  });
module.exports={BlogRouter}