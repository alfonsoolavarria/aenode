var express = require('express');
var router = express.Router();

router.get('/', function(req, res){
   res.send('Envia Data.');
});

router.post('/recive/', function(req, res){
   res.send('Recibe Data.');
});

//export this router to use in our index.js
module.exports = router;
