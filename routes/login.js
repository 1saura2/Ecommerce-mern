const express = require('express')
const router = express.Router();
const authorize = require('../middlewares/authorize')
const welcomeUser = require('../controllers/login')

router.post('/', authorize, welcomeUser)
  
  module.exports = router