const route = require('express').Router();
const {createPost,showAllPosts} = require('../../controller/post')

route.get("/",async (req,res) => {
    const posts = await showAllPosts({id : undefined});
    res.status(200).send(posts);
})

route.get("/:id",async (req,res) => {
    const posts = await showAllPosts({id : req.params.id});
    res.status(200).send(posts);
})

route.post("/",async (req,res) => {
    const { userId, title, body } = req.body
  
    if ((!userId) || (!title) || (!body)) {
        return res.status(400).send({
        error: 'Need userid, title and body to create post'
        })
    }

    const post = await createPost(userId, title, body)
    res.status(201).send(post)
})

module.exports = {
    postRoute : route
};