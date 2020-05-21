const {db,Users} = require('../db/models');
const {genRandomUsername} = require('../utils/username')

async function createUser() {
    const user = await Users.create({
        username: genRandomUsername(),
    })
    
    return user
}

async function getUserById(id){
    const user = await Users.findOne({where : {id}});
    return user;
}

async function getUserByName(username){
    const user = await Users.findOne({where : {username}});
    return user;
}

module.exports = { 
    createUser,
    getUserByName,
    getUserById
};

//Test code console.log(getUserById(1));
//  Test code console.log(createUser());
// console.log(createUser());
// console.log(createUser());