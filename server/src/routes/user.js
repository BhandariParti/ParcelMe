const express =require('express')
const registerNewUser = require('../controllers/user')
const router = express.Router()
router.get('/register', registerNewUser)
module.exports= router
