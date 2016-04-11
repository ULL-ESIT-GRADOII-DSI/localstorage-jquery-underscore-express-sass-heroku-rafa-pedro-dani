var express = require('express');
var router = express.Router();
var calc = require('../src/csv');

// Página principal

router.get('/', function(req, res) {
    res.render('index', {
        title: 'CSV Validator'
    });
});

router.post('/csv', function(req, res) {
    res.render('csv', {
        title: 'CSV Validator',
        csv: calc.calculate(req.body.csvData)
    });
});

module.exports = router;
