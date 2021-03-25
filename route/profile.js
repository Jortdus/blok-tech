const express = require('express')
const profile = express.Router()
const scheme = require('../model/user')
 
profile.get('/profile/:username', (req, res) => {
    // looks up username based on username given in URL
    scheme.findOne({
        username: req.params.username
    }).then(results => {
        // renders profile page and returns the data pulled from database
        res.render('layouts/profile', {
            profile: results
        })
    })
})

module.exports = profile;