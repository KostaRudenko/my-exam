const express = require('express');
const bodyParser = require('body-parser');
const App = express();

const user  = {
    login: 'admin',
    pass: 'admin'
};

App.use(bodyParser.json());

App.post('/api/user/login', (req, res) => {
    const login = req.body.login;
    const pass = req.body.pass;

    if (user.login === login && user.pass === pass){
        return res.json({
            check: 'exist'
        })
    } else {
        return res.json({
            check: 'not exist'
        })
    }
});

App.listen(4000, () => {
    console.log('server is started');
});