//EXTERNAL IMPORTS
const bodyParser = require('body-parser');
const express = require('express');
const router = express.Router();
const mysql = require('../mysql').pool;
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken')

//LOCAL IMPORTS
const loginControllers = require('../controllers/loginControllers')

//GET
router.get('/check/:email',loginControllers.getLoginEmail);


//POST
router.post('/cadastro',loginControllers.createLogin);
router.post('/sign',loginControllers.postLogin)


module.exports = router