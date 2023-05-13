const express = require('express');
const cors = require('cors');
const port = 5001;

const app = express();

app.use(cors()); // to control who can access your application...

app.use(express.urlencoded({extended: false})); // used for accepting data from request body
app.use(express.json()); // used for accepting data from request body in json format

// app.get('/showAllTrainees', (req, res, err) => {
//     modules.showAllTrainees(req, res);
// });
// app.get('/showTrainee', (req, res, err) => {
//     modules.showTrainee(req, res);
// });
// app.post('/addTrainee', (req, res, err) => {
//     modules.addTrainee(req, res);
// });
// app.put('/updateTrainee', (req, res, err) => {
//     modules.updateTrainee(req, res);
// });
// app.delete('/deleteTrainee', (req, res, err) => {
//     modules.deleteTrainee(req, res);
// });

const TraineeRoute = require('./routes/traineeRoute');
app.use('/trainees', TraineeRoute); 
// http://localhost:5001/trainees
// http://localhost:5001/api/v1/trainees
// http://localhost:5001/api/v2/trainees

// const BatchRoute = require('./routes/batchRoute');
// app.use('/batch', BatchRoute); // http://localhost:5001/batch

// const StudentsRoute = require('./routes/studentsRoute');
// app.use('/students', StudentsRoute); // http://localhost:5001/students

// const ClassRoute = require('./routes/classRoute');
// app.use('/class', ClassRoute); // http://localhost:5001/class

app.use('/*', (req, res) => {
    res.send("Unauthorised Access!!!");
});

app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});