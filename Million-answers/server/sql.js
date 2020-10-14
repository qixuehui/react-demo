const mysql = require('mysql')

//配置连接
const connection = {
    host: 'localhost',
    post: '3306',
    user: 'root',
    password: '123456',
    database: 'million'
};


//创建连接对象
let con = mysql.createConnection(connection)


//连接

con.connect(err => {
    if (err) {
        console.log('数据库连接失败' + err);
    } else {
        console.log('数据库连接成功');
    }
})



//题目数据
//创建promise对象查询方法
function queryFn(sqlStr, arr) {
    //创建连接对象
    let con = mysql.createConnection(connection)
    return new Promise((reslove, reject) => {
        con.query(sqlStr, arr, (err, result) => {
            if (err) {
                reject(err)
            } else {
                reslove(result)
                    //连接终止
                con.end()
            }
        })
    })
}

module.exports = queryFn;