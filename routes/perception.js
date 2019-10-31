var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('perception', { title: 'Perception Check' });
});

module.exports = router;
