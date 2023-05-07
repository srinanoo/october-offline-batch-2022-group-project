const http = require('http');
const port = 5001;
const modules = require('./traineeModules');

http.createServer((req, res, err) => {
    if(err) console.log(err);

    if(req.url !== "/favicon.ico") {
        if(req.url === "/showAllTrainees") { // http://localhost:5000/showAllTrainees
            modules.showAllTrainees(req, res);
        } else if(req.url === "/showTrainee") { // http://localhost:5000/showTrainee
            modules.showTrainee(req, res);
        } else if(req.url === "/addTrainee") { // http://localhost:5000/addTrainee
            modules.addTrainee(req, res);
        } else if(req.url === "/updateTrainee") { // http://localhost:5000/updateTrainee
            modules.updateTrainee(req, res);
        } else if(req.url === "/deleteTrainee") { // http://localhost:5000/deleteTrainee
            modules.deleteTrainee(req, res);
        }
    }
}).listen(port, () => console.log(`Server is running in port: ${port}`));