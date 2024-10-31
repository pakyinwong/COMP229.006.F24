var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'HK Express' });
});

router.get('/yin', function(req, res, next) {
  res.send('Hi in index');
});

module.exports = router;
