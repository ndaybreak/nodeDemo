var express = require('express');
var router = express.Router();
var path = require('path');
var fs = require('fs');

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

router.get('/html/:id', function(req, res, next) {

	var rs = fs.createReadStream(path.join(__dirname, './../views/test/html/gMap.html'));

	rs.on('data', function (chunk) {
	    res.send(chunk)
	});

	rs.on('end', function () {
	    cleanUp();
	});
});


/* WS listing. */
router.post('/upload/UploadAction', function(req, res, next) {
  res.send('{success: true}')
  
});

module.exports = router;
