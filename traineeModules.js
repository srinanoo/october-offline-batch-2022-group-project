const fs = require('fs');
const traineeFile = "./traineeNode.json";

const showAllTrainees = (req, res) => {
    fs.readFile(traineeFile, 'utf8', (err, data) => {
        if (err) {
            res.write("Can't Read Trainee Data");
            res.end();
        }

        res.write(data);
        res.end();
    });
}

const showTrainee = (req, res) => {
    fs.readFile(traineeFile, 'utf8', (err, data) => {
        if (err) {
            res.write("Can't Read Trainee Data");
            res.end();
        }

        let result = JSON.parse(data);
        /////////////////// for JSON
        let json = '';
        req.on('data', chunk => json += chunk.toString('utf8'));
        req.on('end', () => {
            const dataObj = JSON.parse(json);
            let output = result.filter(v => v.name === dataObj.name);
            (output.length > 0) ? res.write(JSON.stringify(output)) : res.write("No Trainee Found!");
            res.end();
        });
    });
}

const deleteTrainee = (req, res) => {
    fs.readFile(traineeFile, 'utf8', (err, data) => {
        if (err) {
            res.write("Can't Read Trainee Data");
            res.end();
        }

        let result = JSON.parse(data);
        /////////////////// for JSON
        let json = '';
        req.on('data', chunk => json += chunk.toString('utf8'));
        req.on('end', () => {
            const dataObj = JSON.parse(json);
            let output = result.filter(v => v.id !== dataObj.id);

            if(result.length > output.length) {
                fs.writeFile(traineeFile, JSON.stringify(output), (err) => {
                    if (err) {
                        res.write("Can't Delete Trainee Data");
                        res.end();
                    }
                });
                res.write("Trainee Deleted!");
            } else {
                res.write("No Trainee Found!");
            }
            res.end();
        });
    });
}

const addTrainee = (req, res) => {
    fs.readFile(traineeFile, "utf-8", (err, data) => {
        if (err) {
            res.write("Can't Read Trainee Data");
            res.end();
        }

        let result = JSON.parse(data);
        let len = result.length;

        /////////////////// for JSON
        let json = '';
        req.on('data', chunk => json += chunk.toString('utf8'));
        req.on('end', () => {
            const dataObj = JSON.parse(json);

            if(len>=0) {
                let chkUser = result.filter(v => (v.name === dataObj.name || v.email === dataObj.email));
                console.log("Trainee - ", chkUser.length);

                if(chkUser.length === 0) {
                    dataObj.id = len+1;
                    result.push(dataObj);
            
                    fs.writeFile(traineeFile, JSON.stringify(result), (err) => {
                        if (err) {
                            res.write("Can't Add Trainee Data");
                            res.end();
                        }
                    });
        
                    console.log("Trainee Added!");
                    res.write("Trainee Added!");                    
                } else {
                    console.log("Trainee already exist!");
                    res.write("Trainee already exist!");
                }
            } else {
                res.write("No Traineed Added!");
            }
            res.end();
        });
    });
}

const updateTrainee = (req, res) => {
    fs.readFile(traineeFile, "utf-8", (err, data) => {
        if (err) {
            res.write("Can't Read Trainee Data");
            res.end();
        }

        let result = JSON.parse(data);
        let found = false;
        /////////////////// for JSON
        let json = '';
        req.on('data', val => json += val.toString('utf8'));
        req.on('end', () => {
            const dataObj = JSON.parse(json);
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
                    res.write("Can't Update Trainee Data");
                    res.end();
                }

                (found) ? res.write("Trainee Updated!") : res.write("No Trainee found!");
                res.end();
            });
        });
    });
}

module.exports = { showAllTrainees, showTrainee, deleteTrainee, addTrainee, updateTrainee }