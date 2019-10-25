const router = require('express').Router();
const pool = require('../database');
const mysql = require('mysql');
const express = require('express');


router.get('/', (req, res, next) => {
  
  res.render('LogIn');

});

router.get('/main',(req, res, next)=>{
	res.render('main');

});

router.post('/validateLogIn',(req, res, next) => {

  var {inputUser,inputPassword} = req.body;

	
	let selectQuery = 'Select username from `RXWuaQvtL6`.`Users` where username = ?';
	let validatePassQuery =  'Select password from  `RXWuaQvtL6`.`Users` where username = ? ';

		let sqlQuery = mysql.format(selectQuery,[inputUser]);
	    pool.query(sqlQuery,(err, response) => {
	    	if(!response.length){
	    	
	    		console.log("El usuario no es valido ");
	    	}else{

	    		let sqlPassword = mysql.format(validatePassQuery,[inputUser]);
	    		pool.query(sqlPassword,(err,response)=> {
	    			if(inputPassword== response[0].password){
	    				console.log("password valido");
	    				res.redirect("/main");
	    			}else{
	    				
	    			}

	    		});

	    		console.log("Usuario registrado");
	    	}
		});
	

});




router.get('/register', (req, res, next) => {
  res.render('register');
  

});

router.get('/ModifyUser', (req, res, next) => {
	res.render('users/modifyUser');
	
  
  })

  router.get('/ModifyPassword', (req, res, next) => {
	res.render('users/modifyPassword');
	
  
  })

module.exports = router;