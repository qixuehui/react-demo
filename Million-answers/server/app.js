const express = require("express");
var bodyParser = require("body-parser");
const router = require("./router");

const app = express();
//设置跨域访问
// app.all("*", function(req, res, next) {
//     res.header("Access-Control-Allow-Origin", "*");
//     res.header(
//         "Access-Control-Allow-Headers",
//         "Content-Type, Content-Length, Authorization, Accept, X-Requested-With , yourHeaderFeild"
//     );
//     res.header("Access-Control-Allow-Methods", "PUT,POST,GET,DELETE,OPTIONS");
//     res.header("X-Powered-By", " 3.2.1");
//     res.header("Content-Type", "application/json;charset=utf-8");
//     next();
// });

//中间件 body-parser
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.use(router);
//8080
app.listen(8080, function() {
    console.log("running", "http://localhost:8080/");
});

module.exports = app;