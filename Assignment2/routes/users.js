var express = require('express');
var router = express.Router();

let userController = require('../controller/users')

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});

router.get('/yin', function(req, res, next) {
  res.send('Give me $');
});

router.post('/create', userController.create)

module.exports = router;
