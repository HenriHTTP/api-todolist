const express = require('express');
const router = express.Router();  
const worksController = require('../controllers/AllWorksController')


router.get('/all' ,worksController.FindAllWorks);

module.exports = router;