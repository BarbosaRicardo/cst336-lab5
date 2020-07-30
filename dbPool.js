const mysql = require('mysql');

const pool  = mysql.createPool({
    connectionLimit: 10,
    host: "sq65ur5a5bj7flas.cbetxkdyhwsb.us-east-1.rds.amazonaws.com",
    user: "mo4y69fv6kdnbdey",
    password: "wnyst7xe1ssod7qc",
    database: "xi1w4v55qyjnoz5a"
});

module.exports = pool;

//mysql://mo4y69fv6kdnbdey:wnyst7xe1ssod7qc@sq65ur5a5bj7flas.cbetxkdyhwsb.us-east-1.rds.amazonaws.com:3306/xi1w4v55qyjnoz5a