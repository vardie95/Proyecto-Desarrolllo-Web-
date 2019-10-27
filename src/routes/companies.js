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

router.post('/registerCompany',async(req,res,next)=>{
  var {inputName, inputNumTelefono, inputEmail, inputZonaOrigen,
  inputZonaDestino,inputDireccionSenna,inputDiasSemana,inputHoraApertura,
inputHoraCierre,inputContactoAnomalias} = req.body;

let insertQuery = 'INSERT INTO `RXWuaQvtL6`.`Company`(`name`, `phone`, `sourcezone`, `destinyzone`, `email`, `anomalycontact`,'+
'`addresssigns`,`latitude`,`longitude`,`daysattention`,`openingtime`,`closingtime`)'+'VALUES (?,?,?,?,?,?,?,?,?,?,?,?)';
	let selectQuery = 'Select username from `RXWuaQvtL6`.`Users` where username = ?';

	

});
module.exports = router;