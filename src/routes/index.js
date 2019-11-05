const router = require('express').Router();
const pool = require('../database');
const mysql = require('mysql');
var userName = '';
var mensaje = '';

router.get('/', (req, res, next) => {
	
		res.render('LogIn', {message: mensaje});
	
});


router.post('/validateLogIn',(req, res, next) => {

  var {inputUser,inputPassword} = req.body;
	let selectQuery = 'Select username from `RXWuaQvtL6`.`Users` where username = ?';
	let validatePassQuery =  'Select password, Active from  `RXWuaQvtL6`.`Users` where username = ? ';

		let sqlQuery = mysql.format(selectQuery,[inputUser]);
	    pool.query(sqlQuery,(err, response) => {
	    	if(!response.length){
				mensaje = 'El usuario no es valido ';
				res.redirect('/');
	    	}else{
				userName=response[0].username;
	    		let sqlPassword = mysql.format(validatePassQuery,[inputUser]);
	    		pool.query(sqlPassword,(err,response)=> {
	    			if(response[0].Active == 0){
						mensaje = 'Usuario deshabilitado';
						console.log("Usuario deshabilitado");
						res.redirect('/');
	    			}else{

						if(response[0].password == inputPassword){
							req.session.userId = userName;
							res.render("main");
						}
						else{
							mensaje = 'Contraseña Incorrecta';
							console.log("Contraseña Incorrecta");
							res.redirect('/');
						}
	    				
	    			}

	    		});

	    	
	    	}
		});
	

});

router.get('/main',(req, res, next)=>{
	res.render('main');

	
});


router.get('/register', (req, res, next) => {
  res.render('register');
  

});

router.get('/ModifyUser', (req, res, next) => {
	
	
	let selectQuery = 'Select name,lastname1,lastname2,email from `RXWuaQvtL6`.`Users` where username = ?';
	let sqlQuery = mysql.format(selectQuery,[userName]);
	pool.query(sqlQuery,(err, response) => {
		if(err){
			console.log(err);

		}else{
			res.header(req.session.userId);
			res.render('users/modifyUser',{
				name:response[0].name,
				lastname1: response[0].lastname1,
				lastname2: response[0].lastname2,
				email: response[0].email
			});
			
		}
		

	});
  
  })

  router.get('/ModifyPassword', (req, res, next) => {
	res.render('users/modifyPassword');
  
  })

module.exports = router;