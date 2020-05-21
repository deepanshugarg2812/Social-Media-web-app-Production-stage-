const express = require('express');
const app = express();

const { db } = require('./db/models')

const {userRoute} = require('./routes/users/index');
const {postRoute} = require('./routes/posts/index');
const {commentRoute} = require('./routes/comments/index');

app.use(express.json());
app.use(express.urlencoded({extended : true}));

app.use("/api/user",userRoute);
app.use("/api/post",postRoute);
app.use("/api/comment",commentRoute);

app.use("/",express.static(__dirname + '/public'));

db.sync().then(() => {
    app.listen(3000,() => {
        console.log("Started at http://localhost:3000");
    })
})