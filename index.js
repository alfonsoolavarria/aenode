const express = require('express')
const app = express()
const port = 3000
var bodyParser = require('body-parser')
var mainjs = require('./router/main.js');

app.use(bodyParser.urlencoded({extended:false}));
app.use(bodyParser.json());

app.get('/', (req, res) => {
  res.send('Hello World AE!')
})

app.use('/main', mainjs);


app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})
