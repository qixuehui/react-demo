const express = require("express");
var bodyParser = require("body-parser");
const router = require("./router");

const app = express();

app.use(router);

//中间件 body-parser
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.listen(8080, function() {
    console.log("running", "http://localhost:8080/");
});

module.exports = app;