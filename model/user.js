const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
    username: String,
    steamID: String,
    country: String,
    profilePicture: String,
});

module.exports = mongoose.model('user', userSchema)