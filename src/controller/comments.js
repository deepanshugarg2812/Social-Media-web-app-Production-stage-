const {Posts,Users,Comments} = require('../db/models');

async function addComment(title,body,userId,postId){
    const comment = await Comments.create({
        title,body,userId,postId
    })
    return comment;
}

async function fetchComments(postId){
    const comment = await Comments.findAll({where : {postId : postId},include : [Users,Posts]});
    return comment;
}

exports = module.exports = {
    addComment,
    fetchComments
}

// // Test the comments
// async function task(){
//     const comment = await fetchComments(1);
//     for(let c of comment){
//         console.log(c.title + " " + c.user.username);
//     }
// }
// task();