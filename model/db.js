const mongoose = require('mongoose');
require('dotenv').config()
const URI = process.env.DB_CONNECTION_STRING
console.log(URI);
const connectDB = async () => {
    await mongoose.connect(URI);
    console.log("connection successfull");
};

module.exports = connectDB;