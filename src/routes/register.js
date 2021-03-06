const router = require('express').Router();
const pool = require('../database.js');
const mysql = require('mysql');

var {mensaje,mensajePass} = '';


router.get('/', (req, res, next) => {
  res.render('LogIn');
});


router.get('/register', (req, res, next) => {
  res.render('register', {message : mensaje, passwordMessage : mensajePass});
  

});

router.post('/registerUser',async(req,res,next) => {


	var {inputUserName,inputName,inputLastName1, inputLastName2, inputEmail, inputPassword,inputPasswordConfirm} = req.body;

	let insertQuery = 'INSERT INTO `RXWuaQvtL6`.`Users`(`username`, `name`, `lastname1`, `lastname2`, `email`, `password`,`Active`) VALUES (?,?,?,?,?,?,?)';
	let selectQuery = 'Select username from `RXWuaQvtL6`.`Users` where username = ?';

	if(inputPassword!='' && (inputPassword==inputPasswordConfirm)){
		let sqlQuery = mysql.format(selectQuery,[inputUserName]);
	    pool.query(sqlQuery,(err, response) => {
	    	if(!response.length){
	    		//Investigar bcrypt o preguntar que usar para encriptar
	    		sqlQuery = mysql.format(insertQuery,[inputUserName,inputName,inputLastName1,inputLastName2,inputEmail,inputPassword,1]);
	    		pool.query(sqlQuery,(err, response) => {
	    			//hacer validación
	    			res.redirect("/");
	    			let sqlQuery = mysql.format(selectQuery,[inputUserName]);
	    			pool.query(sqlQuery,(err, response) => {
	    				console.log(response[0]);
	    			});
	    		});
	    	}else{
				console.log(response);
				mensaje = 'El usuario ya existe';
				mensajePass = '';
				console.log("El usuario ya existe");
				res.redirect('/register');
	    	}
		});
	}else{
		//hacer mensaje, investigar
		mensaje = '';
		mensajePass = 'Contraseña no coincide o esta en blanco';
		console.log("Contraseña no coincide o esta en blanco");
		res.redirect('/register');
	};

});

module.exports = router;