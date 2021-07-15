const express = require('express');
const expressHbs = require('express-handlebars');
const path = require('path');
const fs = require('fs');

const app = express();

app.use(express.json());
app.use(express.urlencoded({extended: true}));
app.use(express.static(path.join(__dirname, 'static')));

app.set('view engine', '.hbs');

app.engine('.hbs', expressHbs({
    defaultLayout: false
}));

app.set('views', path.join(__dirname, 'static'));

users = [{mail: '', nickname: '', password: ''}];

app.get('/registration', (req, res) => {
    res.render('registration');
});

app.post('/registration', (req, res) => {

    users.forEach(user => {
        if (user.mail === req.body.mail){
            res.redirect('/err')
        } else {
            users.push(req.body);
            fs.appendFile(path.join(__dirname, 'users', 'users.txt'), `${JSON.stringify(req.body)}\n`, err => {
                if (err){
                    console.log(err);
                }
            })
            res.redirect('/users');
        }
    })
})

app.get('/login', (req, res) => {
    res.render('login')
});

app.post('/login', (req, res) => {
    // users.push(req.body);
    // res.json('User registered!')
    res.redirect('/users/:userId')
})

app.post('/err', (req, res) => {
    res.render('err')
})
// app.get('/users', (req, res) => {
//     res.json([
//         {name: 'Viktor'},
//         {name: 'Karina'},
//         {name: 'Olha'}
//     ]);
// });

// app.get('/users', (req, res) => {
//     const {gender} = req.query
//  const filteredUsers = users.filter(value => value.gender === gender)
// res.render('users', {users: filteredUsers})
// });

app.get('/users', (req, res) => {
    fs.readFile(path.join(__dirname, 'users', 'users.txt'), (err, data) => {
        const json = data.toString();
        // const obj = JSON.parse(json);
        res.send(json)
    })
});

app.get('/users/:userId', (req, res) => {
    const {userId} = req.params;
    res.json(users[userId]);
})


app.listen(5000, () => {
    console.log('App listen 5000');
});


