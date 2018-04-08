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
        status: 'Development',
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
        status: 'Planning',
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
        status: 'Testing',
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
        status: 'Design',
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
        status: 'Quened',
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
        status: 'Completed',
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
        status: 'Completed',
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
        status: 'Completed',
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
        status: 'Completed',
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
        status: 'Quened',
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
        status: 'Completed',
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
        status: 'Development',
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
        status: 'Completed',
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
        status: 'Development',
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
        status: 'Planning',
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
        status: 'Development',
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
        status: 'Completed',
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
        status: 'Development',
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
        status: 'Planning',
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
        status: 'Testing',
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
        status: 'Completed',
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
        status: 'Development',
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
        status: 'Development',
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
        status: 'Planning',
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
        status: 'Planning',
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
        status: 'Development',
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
        status: 'Planning',
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
        status: 'Development',
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
        status: 'Completed',
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
        status: 'Development',
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
        status: 'Completed',
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
        status: 'Development',
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
        status: 'Planning',
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
        status: 'Development',
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
        status: 'Completed',
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
        status: 'Development',
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
        status: 'Completed',
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
        status: 'Development',
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
        status: 'Completed',
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
        status: 'Testing',
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
        status: 'Development',
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
        status: 'Planning',
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
        status: 'Design',
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
        status: 'Planning',
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
        status: 'Quened',
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
        status: 'Planning',
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
        status: 'Testing',
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
        status: 'Design',
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
        status: 'Development',
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
        status: 'Planning',
        userName: 'Lyan Roach',
        position: 'UX/UI Designer',
        userAva: 'img/Lyall-Roach.jpg'
    },
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