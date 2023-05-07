let os = require('os');
let path = require('path');
let http = require('http');
let url = require('url');

// let customModules = require('./customModule');
const student = require('./routes/studentsRoute');
const classes = require('./routes/classesRoute');
const batch = require('./routes/batchRoute');

// console.log(os);
// console.log(os.arch());

// console.log(path);
// console.log(path.basename("http://domain.com/path/file.html"));
// console.log(path.dirname("./filesystem.js"));

// console.log(url);
// console.log(http);

const port = 5000;

http.createServer((req, res, err) => {
    if(err) console.log(err.message);

    if(req.url !== "/favicon.ico") {
        if(req.url.indexOf("students") !== -1) { // http://localhost:5000/students/add
            student(req.url, req, res, err);
            // res.write("Students Route");
        } else if(req.url.indexOf("batch") !== -1) { // http://localhost:5000/batch/add
            batch(req.url);
            // res.write("Batch Route");
        } else if(req.url.indexOf("classes") !== -1) { // http://localhost:5000/classes/add
            classes(req.url);
            // res.write("Classes Route")
        } else {
            res.write("No Routes Found!");
        }
        // console.log(req);
        console.log(req.url);
        // console.log(req.method);
        // console.log(req.headers);
        // console.log(req.body);
        // console.log(req.query);
        
        //// for querystring...
        // let querystring = url.parse(req.url, true).query;
        // console.log(querystring);
        // console.log(querystring.id);
        // console.log(querystring.name);
        // res.write(JSON.stringify(querystring));


        /////////////////// for Form Post
        // const chunks = [];
        // req.on('data', chunk => chunks.push(chunk));
        // req.on('end', () => {
        //     const data = Buffer.concat(chunks);
        //     // console.log('Data: ', data);
        //     const stringData = data.toString();
        //     console.log("stringData: ", stringData);
        //     const parsedData = new URLSearchParams(stringData);
        //     const dataObj = {};
        //     for (let pair of parsedData.entries()) {
        //         dataObj[pair[0]] = pair[1];
        //     }
        //     console.log("DataObj: ", dataObj);
        //     // console.log("DataObj: ", dataObj.name);
        //     // console.log("DataObj: ", dataObj.hfSub);
        //     res.write(JSON.stringify(dataObj));
        // });


        /////////////////// for JSON
        // let json = '';
        // req.on('data', chunk => json += chunk.toString('utf8'));
        // req.on('end', () => {
        //     const dataObj = JSON.parse(json);
        //     console.log("DataObj: ", dataObj);
        //     // console.log("DataObj: ", dataObj.name);
        //     // console.log("DataObj: ", dataObj.hfSub);
        // });


        res.end();
    }
    
}).listen(port, () => {
    console.log(`Server is running at port: ${port}`);
});


function students(url) {
    if(url.indexOf("add") !== -1) {
    }
}