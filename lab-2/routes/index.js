var express = require('express');
var router = express.Router();
require('../src/controller');
require('../src/cat');

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.post('/', function (req, res) {
  console.log(req.body);
  console.log(run());
  res.send('POST request to the homepage');
});

module.exports = router;
