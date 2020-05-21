const route = require('express').Router();
const {createUser,getUserById,getUserByName} = require('../../controller/user')

route.get("/:id",async (req,res) => {
    let user;
  if (isNaN(parseInt(req.params.id))) {
    // when param is username
    user = await getUserByUsername(req.params.id)
  } else {
    // when param is user id
    user = await getUserById(req.params.id)
  }

  if (user) {
    res.status(200).send(user)
  } else {
    res.status(404).send({
      error: 'No such user id or username'
    })
  }
})

route.post("/",async (req,res) => {
    let user = await createUser();
    res.status(201).send(user)
})

module.exports = {
    userRoute : route
};