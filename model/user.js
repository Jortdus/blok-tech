const mongoose = require("mongoose");

const userTable = new mongoose.Schema({
    username: String,
    country: String
});

module.exports = mongoose.model('users', userTable)