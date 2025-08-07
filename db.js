const mysql = require('mysql2');

const pool = mysql.createPool({
    host:'localhost',
    user:'root',
    password:'',
    database:'3d_crud'
})

module.exports = pool.promise();