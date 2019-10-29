const router = require('express').Router();
const pool = require('../database.js');
const mysql = require('mysql');
const session = require('express-session');





router.post('/ModifyUser',async(req,res,next) => {
	var {inputName,inputLastName1, inputLastName2, inputEmail} = req.body;
	var userN = 'vardie95';
	let selectQuery = 'UPDATE `RXWuaQvtL6`.`Users` SET  `name` = ?, `lastname1` = ?, `lastname2` = ?, `email` = ? WHERE `Users`.`username` = ?';
		let sqlQuery = mysql.format(selectQuery,[inputName,inputLastName1,inputLastName2,inputEmail,userN]);
	    pool.query(sqlQuery,(err, response) => {
			if(err){
				console.log(err);

			}else{
				console.log("update exitoso");
				res.render('users/modifyUser',{
					name:inputName,
					lastname1: inputLastName1,
					lastname2: inputLastName2,
					email: inputEmail
	
				});
			}
			

		});
	

});

router.post('/ModifyPassword',async(req,res,next) => {


	var {inputPassword,inputNewPassword, inputPasswordConfirm} = req.body;
	var userN = 'vardie95';
	
	let selectQuery =  'Select password from `RXWuaQvtL6`.`Users` where username = ? ';
	let UpdateQuery = 'UPDATE `RXWuaQvtL6`.`Users` SET  `password` = ?  WHERE `Users`.`username` = ?';

	if (inputNewPassword == inputPasswordConfirm){
		let sqlQuery = mysql.format(selectQuery,[userN]);
		pool.query(sqlQuery,(err, response) => {
			if(response[0].password == inputPassword){
				let sqlQuery = mysql.format(UpdateQuery,[inputNewPassword,userN]);
				pool.query(sqlQuery,(err, response) => {
					if(err){
						console.log(err);
		
					}else{
						console.log("update exitoso");
						res.render('users/modifyPassword');
					}


				});

				console.log("cambiar ");
				
			}else {
				console.log("No coincide el antiguo password");
			}


		});



	}else {

		console.log("Password no coinciden ");
	}


		
		
	

});

module.exports = router;