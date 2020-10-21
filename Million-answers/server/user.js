let mysql = require("mysql");
const { createConnection } = require("net");

const connection = {
    host: "localhost",
    post: "3306",
    user: "root",
    password: "123456",
    database: "million",
};

let con = mysql.createConnection(connection);

con.connect((err) => {
    if (err) {
        console.log("连接失败", err);
    } else {
        console.log("连接成功");
    }
});

//查询
function queryUFn(sqlStr, arr) {
    //创建连接对象
    let con = mysql.createConnection(connection);
    return new Promise((reslove, reject) => {
        con.query(sqlStr, arr, (err, result) => {
            if (err) {
                reject(err);
            } else {
                reslove(result);
                //连接终止
                con.end();
            }
        });
    });
}
module.exports.queryUFn = queryUFn;