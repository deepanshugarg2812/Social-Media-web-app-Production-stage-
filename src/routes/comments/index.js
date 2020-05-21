const {addComment,fetchComments} = require('../../controller/comments');
const route = require('express').Router();

route.get("/:id",async (req,res) => {
    //Get the post id from the params 
    const postId = req.params.id;
    const comments = await fetchComments(postId);
    res.status(200).send(comments);
})

route.post("/",(req,res) => {
    //Get the title body postId userId
    const {title,body,userId,postId} = req.body;
    const comment = addComment(title,body,userId,postId);
    res.status(200).send(comment);
})

exports = module.exports = {
    commentRoute : route
}