var express = require('express');
var router = express.Router();
require('../src/controller');
require('../src/cat');

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.post('/', async function (req, res) {
  var id = await post(req.body);
  console.log(id);
  res.send('POST request, id=' + id);
});

router.put('/', async function (req, res) {
  var id = await put(req.body);
  console.log(id);
  res.send('PUT request, id=' + id);
});

module.exports = router;
