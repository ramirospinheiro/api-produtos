const express = require('express')
const router = express.Router()
const usersMiddleware = require('../middlewares/users')
const usersControllers = require('../controllers/users')

router.post('/users', usersMiddleware.validateCreateUser, usersControllers.createUser)

module.exports = router;