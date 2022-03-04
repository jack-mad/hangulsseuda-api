//imports
const express = require('express');
const router = express.Router();
const indexCtrl = require('./../controllers/indexCtrl')

//routes
router.get('/', indexCtrl.getHome)

//export
module.exports = router