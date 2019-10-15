const path = require('path');
const express = require('express');
const ejs = require('ejs');
var http = require('http')
const bodyParser = require('body-parser');


const app = express();

var server = http.createServer(app)
// routes
const indexRoutes = require('./routes/index');

// setttings
app.set('port', process.env.PORT || 3000);
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');


// middlewares
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.use(express.static(__dirname + '/public'));

// routes
app.use(indexRoutes);

// starting the server
app.listen(app.get('port'), () => {
  console.log('server on port', app.get('port'));
});