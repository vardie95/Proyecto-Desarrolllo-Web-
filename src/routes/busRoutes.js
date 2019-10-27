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

  router.post('/registerRoute',async(req,res,next)=>{
    var {inputName, inputNumTelefono, inputEmail, inputZonaOrigen,
    inputZonaDestino,inputDireccionSenna,inputDiasSemana,inputHoraApertura,
  inputHoraCierre,inputContactoAnomalias} = req.body;
  
  let insertQuery = 'INSERT INTO `RXWuaQvtL6`.`Route`(`numroute`, `description`, `ticketCost`, `durationtime`, `disability`, `frecuency`,'+
  '`latitude`,`longitude`,`starttime`,`finishtime`,`idCompany`)'+'VALUES (?,?,?,?,?,?,?,?,?,?,?)';
    let selectQuery = 'Select username from `RXWuaQvtL6`.`Users` where username = ?';
  
    
  
  });
module.exports = router;