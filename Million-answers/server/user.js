let mysql = require('mysql');
const { createConnection } = require('net');

const connection = {
    host: 'localhost',
    post: '3306',
    user: 'root',
    password: '123456',
    database: 'million'
}

let con = mysql.createConnection(connection)

con.connect(err => {
        if (err) {
            console.log('连接失败', err);
        } else {
            console.log('连接成功');
        }
    })
    //查询
function queryUFn() {
    let con = createConnection(connection)
    return new Promise((resolve, reject) => {
        con.query(sqlStr, arr, (err, result) => {
            if (err) {
                reject(err)
            } else {
                resolve(result)
                con.end()
            }
        })
    })
}

function insertUFn() {
    let con = createConnection(connection)
    return new Promise((resolve, reject) => {
        con.insert(sqlStr, arr, (err, result) => {
            if (err) {
                reject(err)
            } else {
                resolve(result)
                con.end()
            }
        })
    })
}
module.exports.queryUFn = queryUFn
module.exports.insertUFn = insertUFn