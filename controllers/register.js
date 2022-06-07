const {users} = require('../data')

const addNewUser = (req, res) => {
    users.push({ id: 2, username: req.body.name, password: req.body.password})
    res.send('User added successfully')
  }

  module.exports = addNewUser

