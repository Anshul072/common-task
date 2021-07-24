const express = require("express");
require("./db")
const Post =require("./models")
const app =express();
app.use(express.json());

app.post('/newpost', async (req,res)=>{
    try{
        const post = new Post({
            title:req.body.title,
            description:req.body.description,
        })
      await post.save();
      return res.status(201).send(post);
    }catch(e){
        return res.status(500).send(e);
    }
});
app.get('/newpost', async (req,res)=>{
    try{
        const posts = await Post.find();
        return res.status(200).send(posts);
    }catch(e){
        return res.status(500).send(e)
    }
});
app.get('/newpost/:id', async (req,res)=>{
    const _id=req.params.id;
    try{
        const post =await Post.findById(_id);
        return res.status(200).send(post);
    }catch(e){
        return res.status(500).send(e)
    }
});
app.delete('/newpost/:id', async (req,res)=>{
    const _id=req.params.id;
    try{
        const post =await Post.findByIdAndDelete(_id);
        if(post){
            res.status(400).send("Post Deleted Successfully");
        }
        else{
            res.send("No Such Post");
        }
    }catch(e){
        return res.status(500).send(e)
    }
});
app.patch('/newpost/:id', async(req,res)=>{
    const _id = req.params.id;
    try{
        const post =await Post.findByIdAndUpdate(_id,req.body);
        if(post){
            const postUp = await Post.findById(_id);
            res.status(200).send(postUp);
        }
        else{
            res.status(400).send("Update failed")
        }
    }catch(e){
        return res.status(500).send(e)
    }
});

app.listen(3000,()=>{console.log("Listening on port 3000")})