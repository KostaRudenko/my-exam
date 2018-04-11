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

//Raport Chart
let raport = {
    LastYear: [20, 40, 10, 30, 50, 15, 25],
    LastMonth: [15, 29, 40, 10, 36, 10, 15],
    LastWeek: [10, 23, 38 , 19, 25, 12, 1]
};

//Raport Views Chart
let raportViews = [
    LastYear = {
        data: [75, 25],
        percent: '75%',
        number: 1300
    },
    LastMonth = {
        data: [30, 70],
        percent: '30%',
        number: 900
    },
    LastWeek = {
        data: [10, 90],
        percent: '10%',
        number: 200
    }
];

//Raport Visitors Chart
let raportVisitors = [
    LastYear = {
        data : [35,65],
        percent: '35%',
        number: 800
    },
    LastMonth = {
        data : [15,85],
        percent: '15%',
        number: 358
    },
    LastWeek = {
        data: [5, 95],
        percent: '5%',
        number: 76,
    }
];

//Raport Impressions Chart
let raportImpressions = [
    LastYear = {
        data : [62,38],
        percent: '62%',
        number: 3800
    },
    LastMonth = {
        data : [18,82],
        percent: '18%',
        number: 1600
    },
    LastWeek = {
        data: [47, 53],
        percent: '47%',
        number: 770
    }
];

let inboxMessageItem = [
    {
        name: 'Michelle Stewart',
        ava: 'img/Michelle-Stewart.jpg',
        altAva: 'Michelle-Stewart-ava',
        time: 'Today, 5:32 PM',
        text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusm.',
        newMessage: true
    },
    {
        name: 'Jolene Slater',
        ava: 'img/Jolene-Slater.jpg',
        altAva: 'Jolene-Slater-ava',
        time: 'Today, 5:32 PM',
        text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusm.',
        newMessage: true
    },
    {
        name: 'Lyall Roach',
        ava: 'img/Lyall-Roach.jpg',
        altAva: 'Lyall-Roach-ava',
        time: 'Today, 5:32 PM',
        text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusm.',
        newMessage: false
    },
    {
        name: 'Michelle Stewart',
        ava: 'img/Michelle-Stewart.jpg',
        altAva: 'Michelle-Stewart-ava',
        time: 'Today, 5:32 PM',
        text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusm.',
        newMessage: false
    },
    {
        name: 'Lyall Roach',
        ava: 'img/Lyall-Roach.jpg',
        altAva: 'Lyall-Roach-ava',
        time: 'Today, 5:32 PM',
        text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusm.',
        newMessage: false
    },
    {
        name: 'Michelle Stewart',
        ava: 'img/Michelle-Stewart.jpg',
        altAva: 'Michelle-Stewart-ava',
        time: 'Today, 5:32 PM',
        text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusm.',
        newMessage: false
    },
    {
        name: 'Lyall Roach',
        ava: 'img/Lyall-Roach.jpg',
        altAva: 'Lyall-Roach-ava',
        time: 'Today, 5:32 PM',
        text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusm.',
        newMessage: false
    }

];

let projects = [
    {
        theme: 'New Website',
        company: 'Microsoft',
        price: 2300,
        deadline: '15 May 2016',
        deadlineTimeLeft: '10 days left',
        timeSpent: '40 hours',
        progress: 70,
        userName: 'Dominic Lynton',
        position: 'Front End Dev',
        userAva: 'img/Dominic-Lynton.jpg'
    },
    {
        theme: 'Landing page',
        company: 'Google',
        price: 1250,
        deadline: '21 May 2016',
        deadlineTimeLeft: '23 days left',
        timeSpent: '7 hours',
        progress: 15,
        userName: 'Lyan Roach',
        position: 'UX/UI Designer',
        userAva: 'img/Lyall-Roach.jpg'
    },
    {
        theme: 'New dashboard',
        company: 'Symu.co',
        price: 5100,
        deadline: '15 May 2016',
        deadlineTimeLeft: '2 days left',
        timeSpent: '56 hours',
        progress: 90,
        userName: 'Michelle Stewart',
        position: 'Account',
        userAva: 'img/Michelle-Stewart.jpg'
    },
    {
        theme: 'New logo',
        company: 'JCD.pl',
        price: 900,
        deadline: '15 June 2016',
        deadlineTimeLeft: '30 days left',
        timeSpent: '10 hours',
        progress: 40,
        userName: 'Lyan Roach',
        position: 'UX/UI Designer',
        userAva: 'img/Lyall-Roach.jpg'
    },
    {
        theme: 'Landing page',
        company: 'Symu.co',
        price: 1500,
        deadline: '8 August 2016',
        deadlineTimeLeft: '2 months left',
        timeSpent: '0 hours',
        progress: 0,
        userName: 'Michelle Stewart',
        position: 'Account',
        userAva: 'img/Michelle-Stewart.jpg'
    },
    {
        theme: 'Mobile app',
        company: 'Facebook',
        price: 4300,
        deadline: '5th May 2016',
        deadlineTimeLeft: 'Completed',
        timeSpent: '59 hours',
        progress: 100,
        userName: 'Michelle Stewart',
        position: 'Account',
        userAva: 'img/Michelle-Stewart.jpg'
    },
    {
        theme: 'Wordpress theme',
        company: 'Themeforest',
        price: 1300,
        deadline: '2th May 2016',
        deadlineTimeLeft: 'Completed',
        timeSpent: '30 hours',
        progress: 100,
        userName: 'Michelle Stewart',
        position: 'Account',
        userAva: 'img/Michelle-Stewart.jpg'
    },
    {
        theme: 'Mobile app',
        company: 'Facebook',
        price: 4300,
        deadline: '5th May 2016',
        deadlineTimeLeft: 'Completed',
        timeSpent: '59 hours',
        progress: 100,
        userName: 'Michelle Stewart',
        position: 'Account',
        userAva: 'img/Michelle-Stewart.jpg'
    },
    {
        theme: 'Wordpress theme',
        company: 'Themeforest',
        price: 1300,
        deadline: '2th May 2016',
        deadlineTimeLeft: 'Completed',
        timeSpent: '30 hours',
        progress: 100,
        userName: 'Michelle Stewart',
        position: 'Account',
        userAva: 'img/Michelle-Stewart.jpg'
    },
    {
        theme: 'Landing page',
        company: 'Symu.co',
        price: 1500,
        deadline: '8 August 2016',
        deadlineTimeLeft: '2 months left',
        timeSpent: '0 hours',
        progress: 0,
        userName: 'Michelle Stewart',
        position: 'Account',
        userAva: 'img/Michelle-Stewart.jpg'
    },
    {
        theme: 'Mobile app',
        company: 'Facebook',
        price: 4300,
        deadline: '5th May 2016',
        deadlineTimeLeft: 'Completed',
        timeSpent: '59 hours',
        progress: 100,
        userName: 'Michelle Stewart',
        position: 'Account',
        userAva: 'img/Michelle-Stewart.jpg'
    },
    {
        theme: 'New Website',
        company: 'Microsoft',
        price: 2300,
        deadline: '15 May 2016',
        deadlineTimeLeft: '10 days left',
        timeSpent: '40 hours',
        progress: 70,
        userName: 'Dominic Lynton',
        position: 'Front End Dev',
        userAva: 'img/Dominic-Lynton.jpg'
    },
    {
        theme: 'Wordpress theme',
        company: 'Themeforest',
        price: 1300,
        deadline: '2th May 2016',
        deadlineTimeLeft: 'Completed',
        timeSpent: '30 hours',
        progress: 100,
        userName: 'Michelle Stewart',
        position: 'Account',
        userAva: 'img/Michelle-Stewart.jpg'
    },
    {
        theme: 'New Website',
        company: 'Microsoft',
        price: 2300,
        deadline: '15 May 2016',
        deadlineTimeLeft: '10 days left',
        timeSpent: '40 hours',
        progress: 70,
        userName: 'Dominic Lynton',
        position: 'Front End Dev',
        userAva: 'img/Dominic-Lynton.jpg'
    },
    {
        theme: 'Landing page',
        company: 'Google',
        price: 1250,
        deadline: '21 May 2016',
        deadlineTimeLeft: '23 days left',
        timeSpent: '7 hours',
        progress: 15,
        userName: 'Lyan Roach',
        position: 'UX/UI Designer',
        userAva: 'img/Lyall-Roach.jpg'
    },
    {
        theme: 'New Website',
        company: 'Microsoft',
        price: 2300,
        deadline: '15 May 2016',
        deadlineTimeLeft: '10 days left',
        timeSpent: '40 hours',
        progress: 70,
        userName: 'Dominic Lynton',
        position: 'Front End Dev',
        userAva: 'img/Dominic-Lynton.jpg'
    },
    {
        theme: 'Mobile app',
        company: 'Facebook',
        price: 4300,
        deadline: '5th May 2016',
        deadlineTimeLeft: 'Completed',
        timeSpent: '59 hours',
        progress: 100,
        userName: 'Michelle Stewart',
        position: 'Account',
        userAva: 'img/Michelle-Stewart.jpg'
    },
    {
        theme: 'New Website',
        company: 'Microsoft',
        price: 2300,
        deadline: '15 May 2016',
        deadlineTimeLeft: '10 days left',
        timeSpent: '40 hours',
        progress: 70,
        userName: 'Dominic Lynton',
        position: 'Front End Dev',
        userAva: 'img/Dominic-Lynton.jpg'
    },
    {
        theme: 'Landing page',
        company: 'Google',
        price: 1250,
        deadline: '21 May 2016',
        deadlineTimeLeft: '23 days left',
        timeSpent: '7 hours',
        progress: 15,
        userName: 'Lyan Roach',
        position: 'UX/UI Designer',
        userAva: 'img/Lyall-Roach.jpg'
    },
    {
        theme: 'New dashboard',
        company: 'Symu.co',
        price: 5100,
        deadline: '15 May 2016',
        deadlineTimeLeft: '2 days left',
        timeSpent: '56 hours',
        progress: 90,
        userName: 'Michelle Stewart',
        position: 'Account',
        userAva: 'img/Michelle-Stewart.jpg'
    },
    {
        theme: 'Wordpress theme',
        company: 'Themeforest',
        price: 1300,
        deadline: '2th May 2016',
        deadlineTimeLeft: 'Completed',
        timeSpent: '30 hours',
        progress: 100,
        userName: 'Michelle Stewart',
        position: 'Account',
        userAva: 'img/Michelle-Stewart.jpg'
    },
    {
        theme: 'New Website',
        company: 'Microsoft',
        price: 2300,
        deadline: '15 May 2016',
        deadlineTimeLeft: '10 days left',
        timeSpent: '40 hours',
        progress: 70,
        userName: 'Dominic Lynton',
        position: 'Front End Dev',
        userAva: 'img/Dominic-Lynton.jpg'
    },
    {
        theme: 'New Website',
        company: 'Microsoft',
        price: 2300,
        deadline: '15 May 2016',
        deadlineTimeLeft: '10 days left',
        timeSpent: '40 hours',
        progress: 70,
        userName: 'Dominic Lynton',
        position: 'Front End Dev',
        userAva: 'img/Dominic-Lynton.jpg'
    },
    {
        theme: 'Landing page',
        company: 'Google',
        price: 1250,
        deadline: '21 May 2016',
        deadlineTimeLeft: '23 days left',
        timeSpent: '7 hours',
        progress: 15,
        userName: 'Lyan Roach',
        position: 'UX/UI Designer',
        userAva: 'img/Lyall-Roach.jpg'
    },
    {
        theme: 'Landing page',
        company: 'Google',
        price: 1250,
        deadline: '21 May 2016',
        deadlineTimeLeft: '23 days left',
        timeSpent: '7 hours',
        progress: 15,
        userName: 'Lyan Roach',
        position: 'UX/UI Designer',
        userAva: 'img/Lyall-Roach.jpg'
    },
    {
        theme: 'New Website',
        company: 'Microsoft',
        price: 2300,
        deadline: '15 May 2016',
        deadlineTimeLeft: '10 days left',
        timeSpent: '40 hours',
        progress: 70,
        userName: 'Dominic Lynton',
        position: 'Front End Dev',
        userAva: 'img/Dominic-Lynton.jpg'
    },
    {
        theme: 'Landing page',
        company: 'Google',
        price: 1250,
        deadline: '21 May 2016',
        deadlineTimeLeft: '23 days left',
        timeSpent: '7 hours',
        progress: 15,
        userName: 'Lyan Roach',
        position: 'UX/UI Designer',
        userAva: 'img/Lyall-Roach.jpg'
    },
    {
        theme: 'New Website',
        company: 'Microsoft',
        price: 2300,
        deadline: '15 May 2016',
        deadlineTimeLeft: '10 days left',
        timeSpent: '40 hours',
        progress: 70,
        userName: 'Dominic Lynton',
        position: 'Front End Dev',
        userAva: 'img/Dominic-Lynton.jpg'
    },
    {
        theme: 'Mobile app',
        company: 'Facebook',
        price: 4300,
        deadline: '5th May 2016',
        deadlineTimeLeft: 'Completed',
        timeSpent: '59 hours',
        progress: 100,
        userName: 'Michelle Stewart',
        position: 'Account',
        userAva: 'img/Michelle-Stewart.jpg'
    },
    {
        theme: 'New Website',
        company: 'Microsoft',
        price: 2300,
        deadline: '15 May 2016',
        deadlineTimeLeft: '10 days left',
        timeSpent: '40 hours',
        progress: 70,
        userName: 'Dominic Lynton',
        position: 'Front End Dev',
        userAva: 'img/Dominic-Lynton.jpg'
    },
    {
        theme: 'Wordpress theme',
        company: 'Themeforest',
        price: 1300,
        deadline: '2th May 2016',
        deadlineTimeLeft: 'Completed',
        timeSpent: '30 hours',
        progress: 100,
        userName: 'Michelle Stewart',
        position: 'Account',
        userAva: 'img/Michelle-Stewart.jpg'
    },
    {
        theme: 'New Website',
        company: 'Microsoft',
        price: 2300,
        deadline: '15 May 2016',
        deadlineTimeLeft: '10 days left',
        timeSpent: '40 hours',
        progress: 70,
        userName: 'Dominic Lynton',
        position: 'Front End Dev',
        userAva: 'img/Dominic-Lynton.jpg'
    },
    {
        theme: 'Landing page',
        company: 'Google',
        price: 1250,
        deadline: '21 May 2016',
        deadlineTimeLeft: '23 days left',
        timeSpent: '7 hours',
        progress: 15,
        userName: 'Lyan Roach',
        position: 'UX/UI Designer',
        userAva: 'img/Lyall-Roach.jpg'
    },
    {
        theme: 'New Website',
        company: 'Microsoft',
        price: 2300,
        deadline: '15 May 2016',
        deadlineTimeLeft: '10 days left',
        timeSpent: '40 hours',
        progress: 70,
        userName: 'Dominic Lynton',
        position: 'Front End Dev',
        userAva: 'img/Dominic-Lynton.jpg'
    },
    {
        theme: 'Mobile app',
        company: 'Facebook',
        price: 4300,
        deadline: '5th May 2016',
        deadlineTimeLeft: 'Completed',
        timeSpent: '59 hours',
        progress: 100,
        userName: 'Michelle Stewart',
        position: 'Account',
        userAva: 'img/Michelle-Stewart.jpg'
    },
    {
        theme: 'New Website',
        company: 'Microsoft',
        price: 2300,
        deadline: '15 May 2016',
        deadlineTimeLeft: '10 days left',
        timeSpent: '40 hours',
        progress: 70,
        userName: 'Dominic Lynton',
        position: 'Front End Dev',
        userAva: 'img/Dominic-Lynton.jpg'
    },
    {
        theme: 'Wordpress theme',
        company: 'Themeforest',
        price: 1300,
        deadline: '2th May 2016',
        deadlineTimeLeft: 'Completed',
        timeSpent: '30 hours',
        progress: 100,
        userName: 'Michelle Stewart',
        position: 'Account',
        userAva: 'img/Michelle-Stewart.jpg'
    },
    {
        theme: 'New Website',
        company: 'Microsoft',
        price: 2300,
        deadline: '15 May 2016',
        deadlineTimeLeft: '10 days left',
        timeSpent: '40 hours',
        progress: 70,
        userName: 'Dominic Lynton',
        position: 'Front End Dev',
        userAva: 'img/Dominic-Lynton.jpg'
    },
    {
        theme: 'Wordpress theme',
        company: 'Themeforest',
        price: 1300,
        deadline: '2th May 2016',
        deadlineTimeLeft: 'Completed',
        timeSpent: '30 hours',
        progress: 100,
        userName: 'Michelle Stewart',
        position: 'Account',
        userAva: 'img/Michelle-Stewart.jpg'
    },
    {
        theme: 'New dashboard',
        company: 'Symu.co',
        price: 5100,
        deadline: '15 May 2016',
        deadlineTimeLeft: '2 days left',
        timeSpent: '56 hours',
        progress: 90,
        userName: 'Michelle Stewart',
        position: 'Account',
        userAva: 'img/Michelle-Stewart.jpg'
    },
    {
        theme: 'New Website',
        company: 'Microsoft',
        price: 2300,
        deadline: '15 May 2016',
        deadlineTimeLeft: '10 days left',
        timeSpent: '40 hours',
        progress: 70,
        userName: 'Dominic Lynton',
        position: 'Front End Dev',
        userAva: 'img/Dominic-Lynton.jpg'
    },
    {
        theme: 'Landing page',
        company: 'Google',
        price: 1250,
        deadline: '21 May 2016',
        deadlineTimeLeft: '23 days left',
        timeSpent: '7 hours',
        progress: 15,
        userName: 'Lyan Roach',
        position: 'UX/UI Designer',
        userAva: 'img/Lyall-Roach.jpg'
    },
    {
        theme: 'New logo',
        company: 'JCD.pl',
        price: 900,
        deadline: '15 June 2016',
        deadlineTimeLeft: '30 days left',
        timeSpent: '10 hours',
        progress: 40,
        userName: 'Lyan Roach',
        position: 'UX/UI Designer',
        userAva: 'img/Lyall-Roach.jpg'
    },
    {
        theme: 'Landing page',
        company: 'Google',
        price: 1250,
        deadline: '21 May 2016',
        deadlineTimeLeft: '23 days left',
        timeSpent: '7 hours',
        progress: 15,
        userName: 'Lyan Roach',
        position: 'UX/UI Designer',
        userAva: 'img/Lyall-Roach.jpg'
    },
    {
        theme: 'Landing page',
        company: 'Symu.co',
        price: 1500,
        deadline: '8 August 2016',
        deadlineTimeLeft: '2 months left',
        timeSpent: '0 hours',
        progress: 0,
        userName: 'Michelle Stewart',
        position: 'Account',
        userAva: 'img/Michelle-Stewart.jpg'
    },
    {
        theme: 'Landing page',
        company: 'Google',
        price: 1250,
        deadline: '21 May 2016',
        deadlineTimeLeft: '23 days left',
        timeSpent: '7 hours',
        progress: 15,
        userName: 'Lyan Roach',
        position: 'UX/UI Designer',
        userAva: 'img/Lyall-Roach.jpg'
    },
    {
        theme: 'New dashboard',
        company: 'Symu.co',
        price: 5100,
        deadline: '15 May 2016',
        deadlineTimeLeft: '2 days left',
        timeSpent: '56 hours',
        progress: 90,
        userName: 'Michelle Stewart',
        position: 'Account',
        userAva: 'img/Michelle-Stewart.jpg'
    },
    {
        theme: 'New logo',
        company: 'JCD.pl',
        price: 900,
        deadline: '15 June 2016',
        deadlineTimeLeft: '30 days left',
        timeSpent: '10 hours',
        progress: 40,
        userName: 'Lyan Roach',
        position: 'UX/UI Designer',
        userAva: 'img/Lyall-Roach.jpg'
    },
    {
        theme: 'New Website',
        company: 'Microsoft',
        price: 2300,
        deadline: '15 May 2016',
        deadlineTimeLeft: '10 days left',
        timeSpent: '40 hours',
        progress: 70,
        userName: 'Dominic Lynton',
        position: 'Front End Dev',
        userAva: 'img/Dominic-Lynton.jpg'
    },
    {
        theme: 'Landing page',
        company: 'Google',
        price: 1250,
        deadline: '21 May 2016',
        deadlineTimeLeft: '23 days left',
        timeSpent: '7 hours',
        progress: 15,
        userName: 'Lyan Roach',
        position: 'UX/UI Designer',
        userAva: 'img/Lyall-Roach.jpg'
    },
];

let raportTable = [
    {
        text: 'Lorem ipsum dolor sit amet tetur',
        time: '6 days',
        views: 358000,
        visitors: 58200,
        ctr: 25,
        cpc: 3.02,
        cpv: 2.52,
        cpm: 28.35,
        status: 'Active'
    },
    {
        text: 'Sed do eiusmod tempor',
        time: '7 hours',
        views: 1200,
        visitors: 800,
        ctr: 10,
        cpc: 8.45,
        cpv: 6.13,
        cpm: 45.22,
        status: 'Disable'
    },
    {
        text: 'Consectetur adipisicing elit sed',
        time: '3 days',
        views: 69000,
        visitors: 7300,
        ctr: 19,
        cpc: 6.22,
        cpv: 3.90,
        cpm: 37.80,
        status: 'Active'
    }
];

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

//Raport Table
App.get('/api/user/table/raport-table', (req, res) => {
    return res.json(
        raportTable
    )
});

//Inbox Messages
App.get('/api/user/messages/inboxMessage', (req, res) => {
    return res.json(
        inboxMessageItem
    )
});

//Projects
App.get('/api/user/projects', (req, res) => {
    return res.json(
        projects
    )
});

//Sales Report Chart
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

//Raport Views Chart
App.get('/api/user/chart/raport-views/last-year', (req, res) => {
    return res.json(
        raportViews[0]
    )
});
App.get('/api/user/chart/raport-views/last-month', (req, res) => {
    return res.json(
        raportViews[1]
    )
});
App.get('/api/user/chart/raport-views/last-week', (req, res) => {
    return res.json(
        raportViews[2]
    )
});


//Raport Visitors Chart
App.get('/api/user/chart/raport-visitors/last-year', (req, res) => {
    return res.json(
        raportVisitors[0]
    )
});
App.get('/api/user/chart/raport-visitors/last-month', (req, res) => {
    return res.json(
        raportVisitors[1]
    )
});
App.get('/api/user/chart/raport-visitors/last-week', (req, res) => {
    return res.json(
        raportVisitors[2]
    )
});

//Raport Impressions Chart
App.get('/api/user/chart/raport-impressions/last-year', (req, res) => {
    return res.json(
        raportImpressions[0]
    )
});
App.get('/api/user/chart/raport-impressions/last-month', (req, res) => {
    return res.json(
        raportImpressions[1]
    )
});
App.get('/api/user/chart/raport-impressions/last-week', (req, res) => {
    return res.json(
        raportImpressions[2]
    )
});


//Raport Chart
App.get('/api/user/chart/raport/last-year', (req, res) => {
    return res.json(
        raport.LastYear
    )
});
App.get('/api/user/chart/raport/last-month', (req, res) => {
    return res.json(
        raport.LastMonth
    )
});
App.get('/api/user/chart/raport/last-week', (req, res) => {
    return res.json(
        raport.LastWeek
    )
});

App.listen(4000, () => {
    console.log('server is started');
});