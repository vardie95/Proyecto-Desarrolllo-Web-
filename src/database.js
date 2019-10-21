const mysql = require('mysql');
const { promisify }= require('util');



  var pool = mysql.createPool( {
  		adapter: 'msql',
        connectionLimit: 10,
        host: 'remotemysql.com',
		user: 'RXWuaQvtL6',
		password: 'w3tA3C2xKM',
		datablase: 'RXWuaQvtL6',
		port: '3306'
    
});





pool.getConnection((err, connection) => {
  if (err) {
    if (err.code === 'PROTOCOL_CONNECTION_LOST') {
      console.error('Database connection was closed.');
    }
    if (err.code === 'ER_CON_COUNT_ERROR') {
      console.error('Database has to many connections');
    }
    if (err.code === 'ECONNREFUSED') {
      console.error('Database connection was refused');
    }
  }

  if (connection) connection.release();
  console.log('DB is Connected');

  return;
});

// Promisify Pool Querys
pool.query = promisify(pool.query);

module.exports = pool;







/*var connection = mysql.createConnection({
	//properties 
		

});

connection.connect(function(error){
	if (!!error){
		console.log('error');
	}else{
		console.log('Connect');
	}


})
*/