const router = require('express').Router();
const pool = require('../database');
const mysql = require('mysql');
const express = require('express');

router.get('/RegisterCompany', (req, res, next) => {
    res.render('companies/registerCompany');
  });

router.get('/ModifyCompany', (req, res, next) => {
    res.render('companies/modifyCompany');
  });


  
module.exports = router;