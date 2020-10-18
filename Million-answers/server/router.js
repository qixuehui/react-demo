const express = require("express");
const queryFn = require("./sql");
const { queryUFn, insertUFn } = require("./user");

const router = express.Router();

router.get("/", function(req, res) {
    res.send("这是答题API服务器");
});
//请求题目
router.get("/api/rtimu", async function(req, res) {
    console.log(req.query.page);
    //跨域解决
    res.append("Access-Control-Allow-Origin", "*");
    res.append("Access-Control-Allow-Content-Type", "*");
    let page = req.query.page ? req.query.page : 2;
    let sql = `select * from quizzes limit ${page * 10},10`;
    const result = await queryFn(sql);
    // res.send(result)
    res.json(Array.from(result));
});
//注册
router.get("/registered", async function(req, res) {
    console.log(req.query.username);
    console.log(req.query.password);
    //跨域解决
    res.append("Access-Control-Allow-Origin", "*");
    res.append("Access-Control-Allow-Content-Type", "*");
    let sql = `insert into user (username,password) values (${req.query.username},${req.query.password})`;
    const result = await insertUFn(sql);
    res.json(Array.from(result));
    // res.redirect("http://localhost:3000/");
});
//登录
router.get("/login", async function(req, res) {
    console.log(req.query.username);
    console.log(req.query.password);
    //跨域解决
    res.append("Access-Control-Allow-Origin", "*");
    res.append("Access-Control-Allow-Content-Type", "*");
    let sql = `select username,password from user where username='${req.query.username}' and password='${req.query.password}'`;
    const result = await queryUFn(sql);
    res.json(Array.from(result));
    //跨域解决
    // res.redirect("http://localhost:3000/home");
});

module.exports = router;