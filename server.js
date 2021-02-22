const express = require('express');
const app = express();
const port = 3000;

app.use('/static', express.static(__dirname + '/static'));

app.set('view engine', 'ejs');

app.get('/', (req, res) => {
  res.render('index');
});

app.get('/about', (req, res) => {
    res.render('about');
});

app.listen(port, () => {
  console.log(`listening to port ${port}`)
});

app.use(function (req, res, next) {
    res.status(404).send("This page does not exist.")
  })