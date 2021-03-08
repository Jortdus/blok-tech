const express = require('express');
const app = express();
const port = 3000;
const connectDB = require('./model/db.js')

// call on db connection module
connectDB();

// static directory designation 
app.use('/static', express.static(__dirname + '/static'));

// view engine designation 
app.set('view engine', 'ejs');

// rendering
app.get('/', (req, res) => {
    res.render('/views/layouts/index.ejs');
});

// 404 error handling 
app.use(function (req, res, next) {
    res.status(404).send("This page does not exist.")
})




