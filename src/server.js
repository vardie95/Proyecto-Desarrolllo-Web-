const path = require('path');
const express = require('express');
const ejs = require('ejs');
var http = require('http');
const bodyParser = require('body-parser');
var session = require('express-session');
const app = express();



var server = http.createServer(app)
// setttings
app.set('port', process.env.PORT || 3000);
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');
app.set(flash());


// middlewares

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(express.static(__dirname + '/public'));
app.use(
  session({
    secret: "app",
    name: "app",
    resave: true,
    saveUninitialized: true
    // cookie: { maxAge: 6000 } /* 6000 ms? 6 seconds -> wut? :S */
  })
);

// routes
app.use(require('./routes/index'));
app.use(require('./routes/register'));
app.use(require('./routes/user'));
app.use(require('./routes/companies'));
app.use(require('./routes/busRoutes'));

// starting the server
app.listen(app.get('port'), () => {
  console.log('server on port', app.get('port'));
});