const express = require('express')
const profile = express.Router()
const scheme = require('../model/user')

profile.get('/profile/:username', (req, res) => {
    scheme.findOne({username:req.params.username}).then(results => {
        res.render('layouts/profile', {
        profile: results
    })})
  })

module.exports = profile;
 

// results request from database, sorts on user in url 