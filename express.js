const express = require('express');
const app = express();
const cors = require('cors'); // Cross Origin Resource Sharing

const PORT = 5000;

app.use(cors());

app.use(express.urlencoded({ extended: false})); // by default it uses "querystring" package (internally used "body-parser" package), if "extended" is set to false then it uses "qs" package.
app.use(express.json());

// app.use("/users",);

app.get("/", (req, res, err) => { // http://localhost:5000/
    // res.send("First Express GET Route");
    console.log(req.query.id);
    console.log(req.query.name);
    res.json(req.query);
});

app.post("/post", (req, res, err) => { // http://localhost:5000/
    // res.send("First Express POST Route");
    console.log(req.body.id);
    console.log(req.body.name);
    res.json(req.body);
});

app.post("/json", (req, res, err) => { // http://localhost:5000/
    // res.send("First Express POST Route");
    console.log(req.body.id);
    console.log(req.body.name);
    res.json(req.body);
});

app.put("/put", (req, res, err) => {
    console.log(req.body.id);
    console.log(req.body.name);
    res.json(req.body);
});

app.delete("/delete", (req, res, err) => {
    console.log(req.body.id);
    res.json(req.body);
});

app.listen(PORT, () => {
    console.log(`Express listening on port: ${PORT}`);
});