require('dotenv').config()
const express = require('express');
const bodyParser = require('body-parser')
const app = express();
const port = process.env.PORT || 5000
const connectDB = require('./model/db.js')
const userSchema = require("./model/user.js")
const router = require("./route/steamFetch.js")
const profile = require("./route/profile.js")
const login = require("./route/login.js")

// call on db connection module
connectDB();

app.use(bodyParser.urlencoded({
    extended: true
}))

// sets views folder
app.set('views', __dirname + '/views')

// static directory designation 
app.use('/static', express.static(__dirname + '/static'))

// view engine designation 
app.set('view engine', 'ejs')

// rendering
app.use(router)
app.use(profile)
app.use(login)

// 404 error handling 
app.use(function (req, res, next) {
    res.status(404).send("This page does not exist.")
})

// Connection confirmation in console.
app.listen(port, () => {
    console.log('Server is running!', port)
})