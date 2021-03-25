const express = require('express')
const login = express.Router()
const User = require("../model/user.js")

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

login.post('/login', (req, res) => {
    const {
        id: steamUser
    } = req.body

    const gameGenre = req.body.gameGenre
    User.findOne({
        username: steamUser
    }).then(result => {
        if (!result) {
            res.render('layouts/login', {
                message: 'User does not exist'
            })
        } else {
            res.redirect('/profile/' + result.username)
        }
    })

})

module.exports = login;