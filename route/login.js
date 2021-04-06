const express = require('express')
const login = express.Router()
const User = require("../model/user.js")

// Rendering login page and catching error incase API returns an error.
login.get('/login', (req, res) => {
    const {
        error
    } = req.query
    if (error && error === 'No match') {
        res.render('layouts/login', {
            message: 'User not found'
        })
        return
    }
    res.render('layouts/login', {
        message: ''
    })
})

// Returns profile page of user in database, if not found in database will return error message
login.post('/login', (req, res) => {
    const {
        id: steamUser
    } = req.body
                                    
    const gameGenre = req.body.gameGenre
    User.findOne({
        username: steamUser
    }).then(result => {
        if (!result) {
            // If user is not in database, send error message.
            res.render('layouts/login', {
                message: 'User does not exist'
            })
        } else {
            // If user is in database, redirect to profile page of user.
            res.redirect('/profile/' + result.username)
        }
    })

})

module.exports = login;