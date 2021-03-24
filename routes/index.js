var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('esports/index', {});
});

router.get('/live', function(req, res, next) {
  res.render('esports/live', {});
});

module.exports = router;
