var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
	// return html page and bind title
  res.render('index.html', { title: 'Expraess' });
});
// expose the router
module.exports = router;
