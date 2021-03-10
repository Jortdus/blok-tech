const mongoose = require('mongoose');

// .env link to DB URI
const URI = process.env.DB_CONNECTION_STRING

// DB connection 
const connectDB = async () => {
    await mongoose.connect(URI, {
        useNewUrlParser: true,
        useUnifiedTopology: true
    });
    console.log("connection successfull");
};

//module export
module.exports = connectDB;