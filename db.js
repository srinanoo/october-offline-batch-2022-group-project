const mongoose = require('mongoose');
require('dotenv').config();

const connectToMongooseDB = () => {
    mongoose.connect(process.env.MOONGOOSE_DB);

    const db = mongoose.connection;
    db.on("error", console.error.bind(console, "connection error..."));
    db.once("open", function() {
        console.log("DB Connected Successfully!");
    });
}

module.exports = { connectToMongooseDB }