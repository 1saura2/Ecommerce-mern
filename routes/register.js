const express = require('express')
const router = express.Router();
const validate = require('../middlewares/validate')
const addNewUser = require('../controllers/register')

router.post('/', validate, addNewUser)

  module.exports = router