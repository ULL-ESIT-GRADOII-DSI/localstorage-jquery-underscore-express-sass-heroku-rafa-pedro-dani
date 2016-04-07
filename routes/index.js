var express = require('express');
var router = express.Router();

// Página principal

router.get('/', function(req, res) {
    res.render('index', {
        title: 'Express',
        prueba: 'Foo!'  // TODO: Quitar esto
    });
});

module.exports = router;
