var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});

router.get('/name', function(req, res, next) {
  res.render('name', { name: 'xiaochi' });
  next()
});

router.all('/name', function(req, res, next) {
  // res.render('name', { name: 'xiaoming' });
  // next()
});





module.exports = router;
