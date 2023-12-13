//EXTERNAL IMPORTS
const express = require('express');
const router = express.Router();
const mysql = require('../mysql').pool;

//LOCAL IMPORTS
const alimentosController = require('../controllers/alimentosController')

//GETS
router.get('/:table',alimentosController.getAlimentos);

module.exports = router