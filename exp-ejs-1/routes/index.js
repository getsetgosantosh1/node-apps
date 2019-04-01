var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function (req, res, next) {
  res.render('pages/index');
});

router.get('mat', function (req, res, next) {
  res.render('pages/index-mat');
});

router.get('boot', function (req, res, next) {
  res.render('pages/index-boot');
});

module.exports = router;