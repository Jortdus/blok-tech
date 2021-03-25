require('dotenv').config()
const express = require('express')
const router = express.Router()
const User = require("../model/user.js")
const SteamAPI = require('steamapi');
const steam = new SteamAPI(process.env.STEAMAPI);

router.get('/', (req, res) => {
    const {
        error
    } = req.query
    if (error && error === 'No match') {
        res.render('layouts/index', {
            message: 'User not found'
        })
        return
    }
    res.render('layouts/index', {
        message: ''
    })
})

router.post('/signup', (req, res) => {
    const {
        id: steamUser
    } = req.body
    
    const gameGenre = req.body.gameGenre
    console.log(gameGenre)
    if (gameGenre !== 'Select a genre') {
        User.findOne({
            username: steamUser
        }).then(result => {
            if (!result) {
                steam.resolve(steamUser).then(id => {
                    steam.getUserSummary(id).then(userSummary => {
                        new User({
                                username: steamUser,
                                steamID: userSummary.steamID,
                                country: userSummary.countryCode || steamUser + ' has decided to not share this information',
                                profilePicture: userSummary.avatar.medium,
                                gameGenre: gameGenre
                            })
                            .save()
                            .then(result =>
                                res.redirect('/profile/' + result.username)
                            )
                    })
                }).catch(err => {
                    res.redirect('/?error=' + err.message)
                })
                return
            }
            res.redirect('/profile/' + result.username)
        })
    } else {
        res.render('layouts/index', {
            message: 'Please select a genre'
        })
        return
    }
})

module.exports = router;