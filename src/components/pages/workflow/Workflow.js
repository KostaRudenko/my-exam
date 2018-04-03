import React from 'react';
import Select from "../../atoms/select/Select";
import './Workflow.css';
import AllProjects from "../../organisms/allProjects/AllProjects";

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
        position: 'Front End Dev'
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
        position: 'UX/UI Designer'
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
        position: 'Account'
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
        position: 'UX/UI Designer'
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
        position: 'Account'
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
        position: 'Account'
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
        position: 'Account'
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
        position: 'Account'
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
        position: 'Account'
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
        position: 'Account'
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
        position: 'Account'
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
        position: 'Front End Dev'
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
        position: 'Account'
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
        position: 'Front End Dev'
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
        position: 'UX/UI Designer'
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
        position: 'Front End Dev'
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
        position: 'Account'
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
        position: 'Front End Dev'
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
        position: 'UX/UI Designer'
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
        position: 'Account'
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
        position: 'Account'
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
        position: 'Front End Dev'
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
        position: 'Front End Dev'
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
        position: 'UX/UI Designer'
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
        position: 'UX/UI Designer'
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
        position: 'Front End Dev'
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
        position: 'UX/UI Designer'
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
        position: 'Front End Dev'
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
        position: 'Account'
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
        position: 'Front End Dev'
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
        position: 'Account'
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
        position: 'Front End Dev'
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
        position: 'UX/UI Designer'
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
        position: 'Front End Dev'
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
        position: 'Account'
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
        position: 'Front End Dev'
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
        position: 'Account'
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
        position: 'Front End Dev'
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
        position: 'Account'
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
        position: 'Account'
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
        position: 'Front End Dev'
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
        position: 'UX/UI Designer'
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
        position: 'UX/UI Designer'
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
        position: 'UX/UI Designer'
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
        position: 'Account'
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
        position: 'UX/UI Designer'
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
        position: 'Account'
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
        position: 'UX/UI Designer'
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
        position: 'Front End Dev'
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
        position: 'UX/UI Designer'
    },
];

class Workflow extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            tab: 'allProjects',
            projects: []
        }
    }

    tabOnClick = (value) => {
        this.setState({
            tab: value
        })
    };

    onChange = (e) => {
        if (e.target.value === 'All'){
            this.setState({
                projects: projects
            });
        } if (e.target.value === 'Microsoft') {
            let Microsoft = projects.filter((projects) => {
                    return(
                        projects.company === 'Microsoft'
                    )
                }
            );
            this.setState({
                projects: Microsoft
            });
        } if (e.target.value === 'Google') {
            let Google = projects.filter((projects) => {
                    return(
                        projects.company === 'Google'
                    )
                }
            );
            this.setState({
                projects: Google
            });
        } if (e.target.value === 'Symu.co') {
            let Symu = projects.filter((projects) => {
                    return(
                        projects.company === 'Symu.co'
                    )
                }
            );
            this.setState({
                projects: Symu
            });
        } if (e.target.value === 'JCD.pl') {
            let JCD = projects.filter((projects) => {
                    return(
                        projects.company === 'JCD.pl'
                    )
                }
            );
            this.setState({
                projects: JCD
            });
        } if (e.target.value === 'Facebook') {
            let Facebook= projects.filter((projects) => {
                    return(
                        projects.company === 'Facebook'
                    )
                }
            );
            this.setState({
                projects: Facebook
            });
        } if (e.target.value === 'Themeforest') {
            let Themeforest= projects.filter((projects) => {
                    return(
                        projects.company === 'Themeforest'
                    )
                }
            );
            this.setState({
                projects: Themeforest
            });
        }
    };

    componentWillMount() {
        this.setState({
            projects: projects
        })
    };

    render() {
        let workflowTabSelect = ['All', 'Microsoft', 'Google', 'Symu.co', 'JCD.pl', 'Facebook', 'Themeforest'];

        return (
            <div>
                <div className="workflowHeader">
                    <ul className="workflowTabsList">
                        <li className={this.state.tab === 'allProjects' ? 'allProjects-active' : 'allProjects'}
                            onClick={() => this.tabOnClick ('allProjects')}> All Projects ({this.state.projects.length})
                        </li>
                        <li className={this.state.tab === 'dragNDrop' ? 'dragNDrop-active' : 'dragNDrop'}
                            onClick={() => this.tabOnClick ('dragNDrop')}> Workflow
                        </li>
                    </ul>
                    <div className="workflowSelectWrap">
                        <span>Show projects:</span>
                        <Select data={workflowTabSelect} onChange={this.onChange} />
                    </div>
                </div>
                <div className="workflowBody" style={{padding: "30px 30px 0 60px"}}>
                    {
                        this.state.tab === 'allProjects'
                            ?
                            <AllProjects data={this.state.projects}/>
                            :
                            <div>atata</div>
                    }
                </div>
            </div>
        )
    }
}

export default Workflow;