var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express generado por consola.', msg: "Hola este es un mensaje de prueba." });
});

module.exports = router;
