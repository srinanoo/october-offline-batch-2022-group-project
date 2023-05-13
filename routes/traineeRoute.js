const router = require('express').Router();
// const traineeController = require('../controllers/traineeController');

const { showAllTrainees, showTrainee, addTrainee, updateTrainee, deleteTrainee } = require('../controllers/traineeController');

// http://localhost:5001/trainees/showAllTrainees
// const { showAllTrainees } = require('../controllers/traineeController');
router.post('/showAllTrainees', showAllTrainees);

// http://localhost:5001/trainees/showTrainee
// const { showTrainee } = require('../controllers/traineeController');
router.post('/showTrainee', showTrainee);

// http://localhost:5001/trainees/addTrainee
// const addTrainees = require('../controllers/addTraineeController');
router.post('/addTrainee', addTrainee);

// http://localhost:5001/trainees/updateTrainee
router.put('/updateTrainee', updateTrainee);

// http://localhost:5001/trainees/deleteTrainee
router.delete('/deleteTrainee', deleteTrainee);

module.exports = router;