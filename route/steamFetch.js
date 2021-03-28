require('dotenv').config()
const express = require('express')
const router = express.Router()
const User = require("../model/user.js")
const SteamAPI = require('steamapi');
const steam = new SteamAPI(process.env.STEAMAPI);

// Rendering sign up page and catching error incase API returns an error.
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

// Fetches steam users information from API using their steamID and enters this into database.
router.post('/signup', (req, res) => {
    const {
        id: steamUser
    } = req.body
    
    const gameGenre = req.body.gameGenre
    // Checks if there has been a selection made in the select input 
    if (gameGenre !== 'Select a genre') {
        // Searches database with given username
        User.findOne({
            username: steamUser
        }).then(result => {
            // If there is no match in database send request to steam API with username of the user. 
            if (!result) {
                steam.resolve(steamUser).then(id => {
                    // retrieves data and puts it into the database
                    steam.getUserSummary(id).then(userSummary => {
                        new User({
                                username: steamUser,
                                steamID: userSummary.steamID,
                                country: userSummary.countryCode || steamUser + ' has decided to not share this information',
                                profilePicture: userSummary.avatar.large,
                                gameGenre: gameGenre,
                                url:userSummary.url
                            })
                            .save()
                            // redirect to profile page of user.
                            .then(result =>
                                res.redirect('/profile/' + result.username)
                            )
                    })
                }).catch(err => {
                    // incase of an error, rerout back to home page and show error in url
                    res.redirect('/?error=' + err.message)
                })
                return
            }
            // If user is in database, redirect to profile page of user.
            res.redirect('/profile/' + result.username)
        })
    } else {
        // If no selection has been made of genre, send error message to page. 
        res.render('layouts/index', {
            message: 'Please select a genre'
        })
        return
    }
})

module.exports = router;