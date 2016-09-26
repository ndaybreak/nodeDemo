var express = require('express');
var router = express.Router();

router.get('/positioning', function(req, res, next) {
  res.render('css/positioning')
});


module.exports = router;