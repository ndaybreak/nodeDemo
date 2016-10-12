var express = require('express');
var router = express.Router();

router.use(function(req, res, next) {
  console.log('')
  console.log('------------  '+ req.path +'  --------------------------------------------------')
  console.log('')
  next()
});

/* GET html listing. */
router.get('/:id', function(req, res, next) {
  res.render('test/' + req.params.id)
});
router.get('/truckHarbour/:id', function(req, res, next) {
  res.render('test/truckHarbour/' + req.params.id)
});


/* WS listing. */
router.post('/upload/UploadAction', function(req, res, next) {
  res.send('{success: true}')
  
});

module.exports = router;
