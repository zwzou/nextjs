var express = require('express');
var router = express.Router();

/* GET home page. */
// router.get('/', function(req, res, next) {
//   res.render('index', { title: 'Express' });
// });

const app = require('../next');

router.get('/p/:id', (req, res) => {
	const actualPage = '/post';
	const queryParams = {
		id: req.params.id
	}
	app.render(req, res, actualPage, queryParams)
})

module.exports = router;