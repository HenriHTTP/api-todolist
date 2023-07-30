const express = require('express');
const router = express.Router();  
const worksController = require('../controllers/UpadateWorksController')
const {CheckIdExistence} = require ('../middleware/IdMiddleware')

router.put('/upadate/:id', CheckIdExistence ,worksController.AltByPK);

module.exports = router;