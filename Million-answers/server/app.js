const express = require('express')
const router = require('./router')



const app = express()


app.use(router)


app.listen(8080, function() {
    console.log('running', 'http://localhost:8080/');
})

module.exports = app