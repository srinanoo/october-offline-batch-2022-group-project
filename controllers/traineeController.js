const fs = require('fs');
const traineeFile = "./traineeNode.json";

const showAllTrainees = (req, res) => {
    fs.readFile(traineeFile, 'utf8', (err, data) => {
        if (err) {
            res.send("Can't Read Trainee Data");
        }

        res.send(data);
    });
}

const showTrainee = (req, res) => {
    fs.readFile(traineeFile, 'utf8', (err, data) => {
        if (err) {
            res.send("Can't Read Trainee Data");
        }

        let result = JSON.parse(data);
        /////////////////// for JSON
        const dataObj = req.body;
        let output = result.filter(v => v.name === dataObj.name);
        (output.length > 0) ? res.send(JSON.stringify(output)) : res.send("No Trainee Found!");
    });
}

const deleteTrainee = (req, res) => {
    fs.readFile(traineeFile, 'utf8', (err, data) => {
        if (err) {
            res.send("Can't Read Trainee Data");
        }

        let result = JSON.parse(data);
        /////////////////// for JSON
        const dataObj = req.body;
        let output = result.filter(v => v.id !== dataObj.id);

        if(result.length > output.length) {
            fs.writeFile(traineeFile, JSON.stringify(output), (err) => {
                if (err) {
                    res.send("Can't Delete Trainee Data");
                }
            });
            res.send("Trainee Deleted!");
        } else {
            res.send("No Trainee Found!");
        }
    });
}

const addTrainee = (req, res) => {
    fs.readFile(traineeFile, "utf-8", (err, data) => {
        if (err) {
            res.send("Can't Read Trainee Data");
        }

        let result = JSON.parse(data);
        let len = result.length;

        /////////////////// for JSON
        const dataObj = req.body;

        if(len>=0) {
            let chkUser = result.filter(v => (v.name === dataObj.name || v.email === dataObj.email));
            console.log("Trainee - ", chkUser.length);

            if(chkUser.length === 0) {
                dataObj.id = len+1;
                result.push(dataObj);
        
                fs.writeFile(traineeFile, JSON.stringify(result), (err) => {
                    if (err) {
                        res.send("Can't Add Trainee Data");
                    }
                });
    
                console.log("Trainee Added!");
                res.send("Trainee Added!");                    
            } else {
                console.log("Trainee already exist!");
                res.send("Trainee already exist!");
            }
        } else {
            res.send("No Traineed Added!");
        }
    });
}

const updateTrainee = (req, res) => {
    fs.readFile(traineeFile, "utf-8", (err, data) => {
        if (err) {
            res.send("Can't Read Trainee Data");
        }

        let result = JSON.parse(data);
        let found = false;
        /////////////////// for JSON
        const dataObj = req.body;
        let trainee = result.map(v => {
            console.log(v.id === dataObj.id);
            if(v.id === dataObj.id) {
                let temp = {...v};
                for(let temp1 in dataObj) {
                    temp[temp1] = dataObj[temp1];
                }
                found = true;
                return temp;
            }
            return v;
        });

        fs.writeFile(traineeFile, JSON.stringify(trainee), (err) => {
            if (err) {
                res.send("Can't Update Trainee Data");
            }

            (found) ? res.send("Trainee Updated!") : res.send("No Trainee found!");
        });
    });
}

module.exports = { showAllTrainees, showTrainee, deleteTrainee, addTrainee, updateTrainee }