const {Posts,Users} = require('../db/models');

async function createPost(userId,title,body){
    const post = await Posts.create({
        title,body,userId
    }) 
    return post;
}

async function showAllPosts(query) {
    let posts;
    if(query.id!=undefined){
        posts = await Posts.findAll({where : {userId : query.id} , include : [Users]});
    }
    else{
        posts = await Posts.findAll({
        include: [ Users ]
        })
    }
    return posts
}
  
module.exports = {
    createPost,
    showAllPosts
}
  

// async function task(){
//     // console.log(await createPost(1,'This is a sample post','Body of the post goes here'))
//     // console.log(await createPost(2,'This is a sample post2','Body of the post goes here2'))
//     const posts = await showAllPosts({id:1})
//   for (let p of posts) {
//     console.log(`${p.title}\nauthor: ${p.user.username}\n${p.body}\n==========\n`)
//   }
// }

// task();