const TraineeCollection = require('../models/traineeDBModel');

const showAllTrainees = (req, res) => {
    try {
        TraineeCollection.find({})
            .then((trainees) => {
                res.json(trainees);
            });
    } catch(err) {
        res.json(err.message);
    }
}

const showTrainee = async (req, res) => {
    try {
        let results = await TraineeCollection.find({name: req.body.name});
        (results.length > 0) ? res.json(results) : res.json("No Trainee Found!");
    } catch(err) {
        res.json(err.message);
    }
}

const deleteTrainee = (req, res) => {
    try {
        TraineeCollection.deleteOne({name: req.body.name})
            .then((results) => {
                if(results.deletedCount > 0) {
                    res.json("Trainee Deleted!");
                } else {
                    res.json("Unable to Delete Trainee! Please try again!");
                }
            });
    } catch(err) {
        res.json(err.message);
    }
}

const addTrainee = async (req, res) => {
    const Trainee = new TraineeCollection(req.body);

    const output = [];

    try {
        await Trainee.save();
        output.push({"message": "Trainee Added!", "error": ""});
        res.json(output);
    }catch(err) {
        let errorList = [];
        if(err.errors) {
            for(let temp in err.errors) {
                errorList.push(err.errors[temp].message);
            }
        }
        output.push({"message": "", "error": errorList});
        res.json(output);
    }
}

const updateTrainee = (req, res) => {
    try {
        TraineeCollection.updateOne({name: req.body.name}, {$set: req.body})
            .then((results) => {
                if(results.modifiedCount > 0) {
                    res.json("Trainee Updated!");
                } else {
                    res.json("Unable to Update Trainee! Please try again!");
                }
            });
    } catch(err) {
        res.json(err.message);
    }
}

module.exports = { showAllTrainees, showTrainee, deleteTrainee, addTrainee, updateTrainee }