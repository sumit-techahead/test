const express = require('express');
// let mysql = require('mysql');
const bcrypt = require('bcrypt');

const app = express();

// let connection = mysql.createConnection({
//     host: 'remotemysql.com',
//     user: '6fEM6erB7x',
//     password: '2NqtEbLd4H',
//     database: '6fEM6erB7x'
// });

app.get('/', (req, res) => {
    // console.log(req);
    // connection.connect();
    // connection.query('SELECT * FROM test', function (error, results, fields) {
    //     if (error) throw error;
    //     console.log('The solution is: ', results[0]);
    // });
    // connection.end();
    // return res.json({});
    return res.json({
        password: 'password',
        hash: bcrypt.hashSync('password', 10)
    });
});

app.listen(3000, () => {
    console.log('Running...');
});
