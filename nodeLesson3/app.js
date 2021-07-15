const express = require('express');
const path = require('path');

const apiRouter = require('./router/api.router');
// const connection = require('./dataBase/index');
const db = require('./dataBase').getInstance();
const app = express();

app.use(express.json());
app.use(express.urlencoded({extended: true}));

app.use(express.static(path.join(__dirname, 'static')));

app.use('/', apiRouter);

// Це приклад, коли йдемо напряму

// app.post('/mysql', (req, res) => {
//     connection.query(`INSERT INTO basicinformation (name, email, password) VALUES ('${req.body.name}',
//     '${req.body.email}', '${req.body.password}')`,
//         (err, results) => {
//             console.log(results);
//         });
//
//     connection.query('SELECT * FROM basicinformation', (err, results) => {
//         res.json(results);
//     });
// });



app.listen(5000, () => {
    console.log('App listen 5000');
});


