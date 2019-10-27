const router = require('express').Router();
const pool = require('../database');
const mysql = require('mysql');
const express = require('express');

router.get('/RegisterRoute', (req, res, next) => {
    res.render('busRoutes/registerRoute');
  });

router.get('/ModifyRoute', (req, res, next) => {
    res.render('busRoutes/modifyRoute');
  });
module.exports = router;