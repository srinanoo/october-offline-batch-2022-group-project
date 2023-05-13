const fs = require('fs');
const traineeFile = './traineeNode.json';

const addTrainees = (req, res) => {
    fs.readFile(traineeFile, "utf-8", (err, data) => {
        if (err) {
            console.log(err.message);
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

module.exports = addTrainees;