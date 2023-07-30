const express = require('express');
const router = express.Router();  
const worksController = require('../controllers/InsertWorksController')

router.post('/insert', worksController.CreateWorks)

module.exports = router