const express = require('express');
const router = express.Router();


const ALL = require ('./all')
const INSERT =  require('./insert')
const ALTER =  require('./update')
const DELETE = require('./delete')


router.use('/works/select/', ALL);
router.use('/works/select/',INSERT)
router.use('/works/select/',ALTER)
router.use('/works/select/',DELETE)


module.exports = router 