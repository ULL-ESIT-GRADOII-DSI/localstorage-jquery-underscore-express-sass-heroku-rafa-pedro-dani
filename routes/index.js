var express = require('express');
var router = express.Router();

// Página principal

router.get('/', function(req, res) {
    res.render('index', {
        title: 'CSV Validator'
    });
});

router.post('/csv', function(req, res) {
    console.log(req.body.csvData);

    // Transformar req.body.csvData en un array como el de abajo

    var csvArr = [
        ["Cabeza 1", "Cabeza 2", "Cabeza 3"],
        ["Dato 1", "Dato 2", "Dato 3"],
        ["Datoto 1", "Datoto 2", "Datoto 3"],
    ]
    res.render('csv', {
        title: 'CSV Validator',
        csv: csvArr
    });
});

module.exports = router;
