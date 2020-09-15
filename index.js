const express = require('express')
const app = express()
const port = 3000
var bodyParser = require('body-parser')
var mainjs = require('./router/main.js');
var apiscrap = require('./router/apiscrap.js');

app.use(bodyParser.urlencoded({extended:false}));
app.use(bodyParser.json());

app.get('/', (req, res) => {
  res.send('Hello World AE!')
})

app.use('/main', mainjs);
app.use('/api', apiscrap);


app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})
