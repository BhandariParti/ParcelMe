const express =require('express')
const router = express.Router()
const registerNewUser = require('../controllers/user')

router.post('/register', registerNewUser)
module.exports= router
