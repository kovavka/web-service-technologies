var express = require('express');
var router = express.Router();
require('../src/controller');
require('../src/cat');

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.post('/', async function (req, res) {
  console.log(await post(req.body));
  res.send('POST request to the homepage');
});

router.put('/', function (req, res) {
  console.log(req.body);
  console.log(put());
  res.send('POST request to the homepage');
});

module.exports = router;
