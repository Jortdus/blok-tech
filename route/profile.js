const express = require('express')
const profile = express.Router()

profile.get('/profile', (req, res) => {
    res.render('layouts/profile')
})

module.exports = profile;
