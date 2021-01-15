var express = require('express');
var router = express.Router();
var productControllers = require('../controllers/productcontroller');

/* GET home page. */
router.get('/', function (req, res, next) {
  res.render('index', {
    title: 'Shopsale | Home',
    logo: 'SHOPSALE'
  });
});

router.get('/cart', function (req, res, next) {
  res.render('cart', {
    title: 'Shopsell | Home',
    logo: 'SHOPSALE'
  });
});

// 

module.exports = router;
