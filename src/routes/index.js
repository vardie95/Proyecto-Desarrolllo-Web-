const router = require('express').Router();
const db = require('../database');
const express = require('express');


router.get('/', (req, res, next) => {
  
  res.render('LogIn');

});

router.post('/main', function(req, res, next) {
  console.log(req.body);
  res.render('main');
  

});

router.get('/register', (req, res, next) => {
  res.render('register');
  

});

module.exports = router;