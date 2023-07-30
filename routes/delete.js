const express = require('express');
const router = express.Router();  
const worksController = require('../controllers/DeleteWorksController')
const {CheckIdExistence} = require ('../middleware/IdMiddleware')

router.delete('/delete/:id',CheckIdExistence ,worksController.DeleteWork)

module.exports = router
