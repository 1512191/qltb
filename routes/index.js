var express = require('express');
var router = express.Router();
var equiControl = require('./../controller/equiq');
const userControl = require('./../controller/user')
/* GET home page. */
router.get('/list', equiControl.listAll);
router.get('/detail/:id' ,equiControl.getDetail);
router.post('/post', equiControl.post);
router.delete('/delete/:id', equiControl.delete);
router.post('/register',userControl.register);
module.exports = router;
