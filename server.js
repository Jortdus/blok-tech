require('dotenv').config()
const express = require('express');
const bodyParser = require('body-parser')
const app = express();
const port = process.env.PORT || 5000
const connectDB = require('./model/db.js')
const SteamAPI = require('steamapi');
const steam = new SteamAPI(process.env.STEAMAPI);
const User = require("./model/user.js")

// call on db connection module
connectDB();

app.use(bodyParser.urlencoded({ extended: true }))

// static directory designation 
app.use('/static', express.static(__dirname + '/static'));

// view engine designation 
app.set('view engine', 'ejs');

// rendering
app.get('/', (req, res) => {
    const { error } = req.query
    if (error && error === 'No match') {
        res.render('layouts/index', { message: 'User not found' });
        return
    }
    res.render('layouts/index', { message: '' });
});

app.post('/login', (req, res) => {
    const { id: steamUser } = req.body
    User.findOne({username: steamUser}).then(result => {
        if (!result) {
            steam.resolve(steamUser).then(id => {
                steam.getUserSummary(id).then(userSummary => {
                    new User({
                        username: steamUser,
                        steamID: userSummary.steamID,
                        country: userSummary.countryCode || '',
                        realName: userSummary.realName || ''
                    })
                    .save()
                    .then(result => 
                        res.redirect('/app')
                    )
                });
            }).catch(err => {
                res.redirect('/?error=' + err.message)
            });
            return
        }
        res.redirect('/profile')
    })
})

// 404 error handling 
app.use(function (req, res, next) {
    res.status(404).send("This page does not exist.")
})

app.listen(port, () => {console.log('Server is running!')});


