require('dotenv').config()
const express = require('express')
const router = express.Router()
const User = require("../model/user.js")
const SteamAPI = require('steamapi');
const steam = new SteamAPI(process.env.STEAMAPI);

router.get('/', (req, res) => {
    const { error } = req.query
    if (error && error === 'No match') {
        res.render('layouts/index', { message: 'User not found' })
        return
    }
    res.render('layouts/index', { message: '' })
})

router.get('/profile', (req, res) => {
    res.render('layouts/profile')
})

router.post('/login', (req, res) => {
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
                        res.redirect('/profile')
                    )
                })
            }).catch(err => {
                res.redirect('/?error=' + err.message)
            })
            return
        }
        res.redirect('/profile')
    })
})

module.exports = router;