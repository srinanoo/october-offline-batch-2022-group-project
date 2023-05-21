const router = require('express').Router();
const traineeDBController = require('../controllers/traineeDBController');

// http://localhost:5001/api/v1/trainees/showAllTrainees
router.post('/showAllTrainees', traineeDBController.showAllTrainees);

// http://localhost:5001/api/v1/trainees/showTrainee
router.post('/showTrainee', traineeDBController.showTrainee);

// http://localhost:5001/api/v1/trainees/addTrainee
router.post('/addTrainee', traineeDBController.addTrainee);

// http://localhost:5001/api/v1/trainees/updateTrainee
router.put('/updateTrainee', traineeDBController.updateTrainee);

// http://localhost:5001/api/v1/trainees/deleteTrainee
router.delete('/deleteTrainee', traineeDBController.deleteTrainee);

module.exports = router;