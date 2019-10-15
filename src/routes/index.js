const router = require('express').Router();

router.get('/', (req, res, next) => {
  res.render('LogIn');

});

router.post('/main', (req, res, next) => {
  res.render('main');


});

router.get('/register', (req, res, next) => {
  res.render('register');
  

});

module.exports = router;