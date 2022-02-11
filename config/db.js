require('dotenv').config();
const mysql = require('mysql2');
const pool = mysql.createPool({
    host:process.env.host,
    user:process.env.user,
    database:process.env.database,
    password:process.env.password,

});

let sql = "SELECT * FROM posts"
pool.execute(sql, function(err, result){
    if(err) throw err;

    console.log(result);
    result.forEach((res) => {
        console.log(res.title);
    });
})

module.exports = pool.promise()