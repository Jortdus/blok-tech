require('dotenv').config()
const mongoose = require('mongoose');

const URI = process.env.DB_CONNECTION_STRING

const connectDB = async () => {
    await mongoose.connect(URI, {
        useNewUrlParser: true,
        useUnifiedTopology: true
    });
    console.log("connection successfull");
};

module.exports = connectDB;