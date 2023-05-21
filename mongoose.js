// Express Configuration
const express = require('express');
const app = express();
const cors = require('cors');
require('dotenv').config();

// Cors
app.use(cors());

// Request Body and JSON
app.use(express.urlencoded({extended: false}));
app.use(express.json());

// Routes
const TraineeDBRoute = require('./routes/traineeDBRoute');
app.use('/api/v1/trainees', TraineeDBRoute);

// Routes - Unhandled / Unauthorised Route
app.use("/*", (req, res) => {
    res.send("Unauthorised Route/End Point");
});

// Server Listen Port
app.listen(process.env.PORT, () => {
    console.log('Server is running on port ' + process.env.PORT);
});