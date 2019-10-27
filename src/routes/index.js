const router = require('express').Router();
const pool = require('../database');
const mysql = require('mysql');
const express = require('express');
var userName = '';

router.get('/', (req, res, next) => {
  
  res.render('LogIn');

});

router.get('/main',(req, res, next)=>{
	res.render('main');

});

router.post('/validateLogIn',(req, res, next) => {

  var {inputUser,inputPassword} = req.body;

	
	let selectQuery = 'Select username from `RXWuaQvtL6`.`Users` where username = ?';
	let validatePassQuery =  'Select password, Active from  `RXWuaQvtL6`.`Users` where username = ? ';

		let sqlQuery = mysql.format(selectQuery,[inputUser]);
	    pool.query(sqlQuery,(err, response) => {
	    	if(!response.length){
	    	
	    		console.log("El usuario no es valido ");
	    	}else{
				userName=response[0].username;
	    		let sqlPassword = mysql.format(validatePassQuery,[inputUser]);
	    		pool.query(sqlPassword,(err,response)=> {
	    			if(response[0].Active == 0){
	    				console.log("Usuario deshabilitado");
	    			}else{

						if(response[0].password == inputPassword){
							res.redirect("/main");


						}
						else{

							console.log("Contraseña Incorrecta");
						}
	    				
	    			}

	    		});

	    	
	    	}
		});
	

});




router.get('/register', (req, res, next) => {
  res.render('register');
  

});

router.get('/ModifyUser', (req, res, next) => {
	console.log(userName);
	
	let selectQuery = 'Select name,lastname1,lastname2,email from `RXWuaQvtL6`.`Users` where username = ?';
	let sqlQuery = mysql.format(selectQuery,[userName]);
	pool.query(sqlQuery,(err, response) => {
		if(err){
			console.log(err);

		}else{
			res.render('users/modifyUser',{response: response[0]});
			
		}
		

	});
  
  })

  router.get('/ModifyPassword', (req, res, next) => {
	res.render('users/modifyPassword');
  
  })

module.exports = router;