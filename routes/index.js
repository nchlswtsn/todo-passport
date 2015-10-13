'use strict';

var express = require('express');
var router = express.Router();

var auth = require('../config/auth');

router.get('/', function(req, res, next) {
  res.render('index', {title: 'TITLE'});
});

router.get('/secure', auth, function(req, res){
  console.log('req.payload:', req.payload);
  res.json({message: 'super secret'});
});

module.exports = router;
