var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
  random=Math.random();
  answer=Math.cosh(random)
  res.send(`Cosh function applied to ${random} is ${answer}`);
});

module.exports = router;
var random=0;
var answer=0;