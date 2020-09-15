var express = require('express');
var router = express.Router();

router.get('/', function(req, res){
   res.send('GET MAIN.');
});

router.post('/', function(req, res){
   res.send('POST MAIN.');
});

//export this router to use in our index.js
module.exports = router;
