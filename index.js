const express = require('express');
var path = require('path');
const port = 3000;
var bodyParser = require('body-parser');
var mainjs = require('./router/main.js');
var apiscrap = require('./router/apiscrap.js');

const app = express();


// view engine setup
app.set('view engine', 'ejs');
//setup public folder
app.use(express.static('./public'));

app.use(bodyParser.urlencoded({extended:false}));
app.use(bodyParser.json());

app.get('/', (req, res) => {
  res.render('eiser/index',{
    links:{"a":"A"}
  });
  // res.send('Hello World AE!')
})

app.use('/main', mainjs);
app.use('/api', apiscrap);


app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})
