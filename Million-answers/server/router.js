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
    res.redirect("http://localhost:3000/");
});
router.post("/registered", async function(req, res) {
    console.log(req.body);
    // 访问get;
    res.send("nihao1");
});
//登录
router.get("/login", async function(req, res) {
    res.redirect("http://localhost:3000/home");
});
router.post("/login", async function(req, res) {
    console.log(req.body);
    // 访问get;
    res.send("nihao1");
});

module.exports = router;