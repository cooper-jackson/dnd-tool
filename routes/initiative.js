var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('initiative', { title: 'Initiative Tool' });
});

module.exports = router;
