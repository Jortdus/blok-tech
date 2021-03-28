const mongoose = require("mongoose");

// Database schema of user data
const userSchema = new mongoose.Schema({
    username: String,
    steamID: String,
    country: String,
    profilePicture: String,
    gameGenre: String,
    url: String
});

// Exporting Schema
module.exports = mongoose.model('user', userSchema)