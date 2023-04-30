let fs = require('fs');
let os = require('os');
let path = require('path');
let http = require('http');
let url = require('url');

let data = [{
    "id": 1,
    "user": "Dinesh",
    "age": 28,
}];

// fs.writeFile("sample.json", JSON.stringify(data), (err) => {
//     if(err) console.log(err);
// })


// fs.readFile("sample.json", 'UTF-8', (err, data) => {
//     if(err) console.log(err);

//     // console.log(data);
//     let output = JSON.parse(data);
//     console.log(output[0].id);
//     console.log(output[0].user);
//     console.log(output[0].age);
// })
// console.log("Sample output");

///------ Synchronous Process Start --------------------------------
// fs.writeFileSync("sample.json", JSON.stringify(data));

// let output = fs.readFileSync("sample.json", "UTF-8");
// output = JSON.parse(output);
// console.log(output);
// output[0].age = 38;
// console.log(output);

// fs.writeFileSync("sample.json", JSON.stringify(output));

// let readData = fs.readFileSync("sample.json", "UTF-8");
// readData = JSON.parse(readData);
// console.log(readData);

// console.log("Sample output");
///------ Synchronous Process Start --------------------------------

///------ Asynchronous Process Start --------------------------------
// fs.writeFile("sample.json", JSON.stringify(data), (err) => {
//     if(err) console.log(err);

//     fs.readFile("sample.json", "UTF-8", (err, data) => {
//         if(err) console.log(err);

//         let output = JSON.parse(data);
//         console.log(output, "First");
//         output[0] = {
//             id: 2,
//             user: "new user",
//             age: 38
//         };
//         console.log(output, "second");
//         output.push({id: 1, user: "Dinesh", age: 28});
//         // output.splice(0, 1);

//         fs.writeFile("sample.json", JSON.stringify(output), (err) => {
//             if(err) console.log(err);

//             fs.readFile("sample.json", "UTF-8", (err, data) => {
//                 if(err) console.log(err);
        
//                 let output = JSON.parse(data);
//                 console.log(output, "Third");
//             });
//         })
//     });
    
// });
///------ Asynchronous Process End --------------------------------

// fs.appendFile
// fs.appendFileSync

// fs.unlink
// fs.unlinkSync

////////////////////////////////
async function readUser(userId=null) {
    if(userId !== null) {
        await fs.readFile("sample.json", "utf-8", (err, data) => {
            if(err) console.log(err);

            let output = JSON.parse(data);
            let results = output.filter(v => v.id === userId);
            console.log(results);
        });
    } else {
        fs.readFile("sample.json", "utf-8", (err, data) => {
            if(err) console.log(err);

            let output = JSON.parse(data);
            console.log(output);
        });
    }
}

function updateUser() {}

function deleteUser() {}

function addUser() {}
////////////////////////////////


// Function Process
readUser(2); // by id or all users
// updateUser(1); // by id
// deleteUser(); // by id or all users
// addUser({id: 1, user: 2, age: 3}); // by obj data