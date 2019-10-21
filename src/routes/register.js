const router = require('express').Router();
const pool = require('../database');




router.get('/', (req, res, next) => {
  res.render('LogIn');

});


router.get('/register', (req, res, next) => {
  res.render('register');
  

});

router.post('/registerUser',async(req,res,next) => {




	const {inputUserName,inputName,inputLastName1, inputLastName2, inputEmail, inputPassword} = req.body;
	console.log(req.body.inputName);

	// var sql = "INSERT INTO RXWuaQvtL6`.`example`(`id`, `name`) VALUES (?,?)";
	//var sql = "INSERT INTO `RXWuaQvtL6`.`Users`(`username`, `name`, `lastname1`, `lastname2`, `email`, `password`) VALUES ('diego','diego','diego','diego','diego','diego')";
	pool.query("INSERT INTO RXWuaQvtL6`.`example`(`id`, `name`) VALUES (?,?)",req.body.inputUserName,req.body.name,function(err){
		if(err){

			console.log(err);
		}else
			console.log("Agregardo exitosamente");


	}



		);

});

module.exports = router;