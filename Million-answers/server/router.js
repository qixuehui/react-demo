const express = require("express");
const queryFn = require("./sql");
// const { queryUFn, insertUFn } = require("./user");

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
router.post("/registered", async function(req, res) {
    console.log("post(/registered");;
    username = req.body.username
    password = req.body.password
    console.log(username);
    console.log(password);
    let sql = `insert into user (username,password) values ('${username}','${password}')`;
    //插入方法有问题
    const result = await queryFn(sql);
    console.log(result);
    if (result != -1) {
        res.redirect('http://localhost:3000/')
    } else {
        res.redirect('http://localhost:3000/registered')
    }
});
router.post("/login", async function(req, res) {
    console.log('post("/login"');
    username = req.body.username
    password = req.body.password
    console.log(username);
    console.log(password);
    let sql = `select * from user where username='${username}' and password='${password}'`;
    //插入方法有问题
    const result = await queryFn(sql);
    console.log(result);
    console.log(result.length);
    if (result.length === 0) {
        //跳转到登录界面
        console.log('失败');
        res.redirect('http://localhost:3000/')
    } else {
        //跳转到答题界面
        console.log('成功');
        res.redirect('http://localhost:3000/home')

    }
})

module.exports = router;