var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'camelkish' });
});
router.get('/about', function(req, res, next) {
  res.render('about', { title: 'about' });
});

router.get('/services', function(req, res, next) {
  res.render('services', { title: 'services' });
});
router.get('/portfolio', function(req, res, next) {
  res.render('portfolio', { title: 'portfolio' });
});
router.get('/contact', function(req, res, next) {
  res.render('contact', { title: 'contact' });
});
module.exports = router;
