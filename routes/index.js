var express = require('express');
var router = express.Router();

// router.all('*', function(req, res, next) {
router.use(function(req, res, next) {
  console.log('')
  console.log('------------  '+ req.path +'  --------------------------------------------------')
  console.log('')
  next()
});

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index');
});

router.get('/info', function(req, res, next) {
  // res.send('index');
  setTimeout(function() {
        res.json({name: 'xiaoming'})
  }, 3000)

});




module.exports = router;
