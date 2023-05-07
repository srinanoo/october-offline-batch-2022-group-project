const fs = require('fs');
const traineeFile = "./trainees.json";

const express = require('express');
const cors = require('cors');

const app = express();
const port = 5000;

app.use(cors());
app.use(express.urlencoded({extended: false}));
app.use(express.json());

app.get("/queryString", (req, res, err) => {
    console.log(req.query.name);
    res.send("");
});

app.post("/post", (req, res, err) => {
    console.log(req.body.name);
    res.send("");
});

app.put('/json', (req, res, err) => {
    console.log(req.body.name);
    res.send("");
});

app.put('/xml', (req, res, err) => {
    console.log(req);
    res.send("This is an XML route");
});

app.post("/showAllTrainees", (req, res, err) => { // http://localhost:5000/showAllTrainees
    if(err) console.log(err);

    fs.readFile(traineeFile, "utf-8", (err, data) => {
        if(err) console.log(err);

        res.send(data);
    });
});

app.post("/showTrainee", (req, res, err) => { // http://localhost:5000/showTrainee
    if(err) console.log(err);

    fs.readFile(traineeFile, "utf-8", (err, data) => {
        if(err) console.log(err);

        // res.send(data);
        let result = JSON.parse(data);
        let trainee = result.filter(v => (v.name === req.body.name));
        (trainee.length != 0) ? res.send(trainee) : res.send("No Trainee found!");
    });
});

app.post("/addTrainee", (req, res, err) => { // http://localhost:5000/addTrainee
    if(err) console.log(err);

    // const {name, batch, year, timings, days} = req.body;
    fs.readFile(traineeFile, "utf-8", (err, data) => {
        if(err) console.log(err);

        let result = JSON.parse(data);
        let len = result.length;
        // console.log(typeof result);
        console.log("Length -", len);

        if(len>=0) {
            // let chkUser = "";
            // for(let i=0; i<result.length; i++) {
            //     if(result[i].name === req.body.name || result[i].email === req.body.email) {
            //         chkUser = "Trainee Already Exists";
            //     }
            // }
            // console.log("Trainee - ", chkUser);

            let chkUser = result.filter(v => (v.name === req.body.name || v.email === req.body.email));
            console.log("Trainee - ", chkUser.length);

            if(chkUser.length === 0) {
                req.body.id = len+1;
                result.push(req.body);
    
                // console.log(req.body);
    
                fs.writeFile(traineeFile, JSON.stringify(result), (err) => {
                    if(err) console.log(err);
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
});

app.put("/updateTrainee", (req, res, err) => { // http://localhost:5000/updateTrainee
    if(err) console.log(err);

    fs.readFile(traineeFile, "utf-8", (err, data) => {
        if(err) console.log(err);

        // res.send(data);
        let result = JSON.parse(data);
        let found = false;
        let trainee = result.map(v => {
            if(v.id === req.body.id) {
                let temp = {...v};
                for(let temp1 in req.body) {
                    temp[temp1] = req.body[temp1];
                }
                return temp;
            } else found = true;
            return v;
        });

        console.log("Result - ", result);
        console.log("Trainee - ", trainee);
        fs.writeFile(traineeFile, JSON.stringify(trainee), (err) => {
            if(err) console.log(err);

            (found) ? res.send("No Trainee found!") : res.send("Trainee Updated!");
        });
    });
});

app.delete("/deleteTrainee", (req, res, err) => { // http://localhost:5000/deleteTrainee
    if(err) console.log(err);

    fs.readFile(traineeFile, "utf-8", (err, data) => {
        if(err) console.log(err);

        // res.send(data);
        let result = JSON.parse(data);
        // let trainee = result.filter(v => (v.id !== req.body.id));
        let trainee = [];
        for(let i=0; i<result.length; i++) {
            if(result[i].id !== req.body.id) {
                trainee.push(result[i]);
            }
        }

        console.log("Result Length - ", result.length);
        console.log("Trainee Length - ", trainee.length);
        if(trainee.length < result.length) {
            fs.writeFile(traineeFile, JSON.stringify(trainee), (err) => {
                if(err) console.log(err);

                res.send("Trainee Deleted!")
            });
            
        } else res.send("No Trainee found!");
    });
});

app.use("/*", (req, res, err) => {
    if(err) console.log(err);

    console.log("Unauthorised Access!");
    res.send("Unauthorised Access!");
});

app.listen(port, () => console.log(`Server is running in port: ${port}`));