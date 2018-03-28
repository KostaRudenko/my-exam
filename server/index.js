const express = require('express');
const bodyParser = require('body-parser');
const App = express();

const user  = {
    login: 'admin',
    pass: 'admin'
};

let salesReport = {
    LastYear: [180, 250, 200, 130, 75, 125, 125, 175, 148, 275, 190, 55],
    LastMonth: [93, 84, 60, 59, 54, 82, 75, 63, 61, 95, 53, 83],
    LastWeek: [16, 3, 40, 2, 50, 28, 20, 33, 50, 19, 41, 13]
};

App.use(bodyParser.json());

App.post('/api/user/login', (req, res) => {
    const login = req.body.login;
    const pass = req.body.pass;

    if (user.login === login && user.pass === pass) {
        return res.json({
            check: 'exist'
        })
    } else {
        return res.json({
            check: 'not exist'
        })
    }
});

App.get('/api/user/chart/sales-report/last-year', (req, res) => {
    return res.json(
        salesReport.LastYear
    )
});
App.get('/api/user/chart/sales-report/last-month', (req, res) => {
    return res.json(
        salesReport.LastMonth
    )
});
App.get('/api/user/chart/sales-report/last-week', (req, res) => {
    return res.json(
        salesReport.LastWeek
    )
});

App.listen(4000, () => {
    console.log('server is started');
});