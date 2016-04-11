var express = require('express');
var router = express.Router();

// Página principal

router.get('/', function(req, res) {
    res.render('index', {
        title: 'CSV Validator'
    });
});

router.get('/csv', function(req, res) {
    console.log(req.body);
    res.render('csv', {
        title: 'CSV Validator'
    });
});

router.post('/csv', function(req, res) {
    console.log(req);
    console.log(res);
    res.render('csv', {
        title: 'CSV Validator',
        req: req,
        res: res
    });
});


module.exports = router;
