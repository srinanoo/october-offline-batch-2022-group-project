const mongoose = require('mongoose');
const Schema = require('mongoose').Schema;
const conn = require('../db');

conn.connectToMongooseDB();

const traineeSchema = new Schema({
    name: {
        type: String,
        required: [true, "Name is mandatory"]
    },
    email: {
        type: String,
        required: [true, "Email is mandatory"]
    },
    age: {
        type: Number,
        required: [true, "Age is mandatory"]
    },
    username: {
        type: String,
        required: [true, "Username is mandatory"]
    },
    password: {
        type: String
    },
    batch: {
        type: String,
        enum: ["October", "November", "December"]
    },
    timings: {
        type: String
    },
    year: {
        type: Number
    },
    phone: {
        type: Number
    },
    batchStartDate: {
        type: Date,
        default: Date.now
    }
});

const TraineeCollection = mongoose.model("trainee", traineeSchema);

module.exports = TraineeCollection;