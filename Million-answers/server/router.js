const express = require('express')
const queryFn = require('./sql')


const router = express.Router()


router.get('/', function(req, res) {
    res.send('这是答题API服务器')
})

router.get('/api/rtimu', async function(req, res) {

    console.log(req.query.page);
    //跨域解决
    res.append("Access-Control-Allow-Origin", "*")
    res.append("Access-Control-Allow-Content-Type", "*")
    let page = req.query.page ? req.query.page : 2
    let sql = `select * from quizzes limit ${page * 10},10`
    const result = await queryFn(sql)
        // res.send(result)
    res.json(Array.from(result))
})

module.exports = router