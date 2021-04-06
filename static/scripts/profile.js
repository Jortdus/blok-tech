const express = require('express')
const profile = express.Router()
const scheme = require('../model/user')

profile.get('/profile', (req, res) => {
    scheme.users.find().then(results => res.render('layouts/profile', {
        username: results
    }))
  })

module.exports = profile;