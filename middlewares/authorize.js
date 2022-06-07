const {users} = require('../data.js')

const authorize = (req, res, next) => {
    let user = users.find((user) => user.username === req.body.name && 
    user.password === req.body.password)
    if(user){
        next()
    }else{
        res.status(401).send("Unauthorized access")
    }
}

module.exports = authorize
