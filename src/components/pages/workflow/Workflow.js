import React from 'react';
import Select from "../../atoms/select/Select";
import AllProjects from "../../organisms/allProjects/AllProjects";
import TrelloDnd from "../../organisms/dnd/trello/TrelloDnd";

import './Workflow.css';

class Workflow extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            tab: 'allProjects',
            projects: [],
        }
    }

    componentWillMount() {
        fetch('/api/user/projects', {
            headers: {
                'Content-type': 'application/json'
            },
            method: 'get'
        })
            .then(res => res.json())
            .then(res => {
                this.setState({
                    projects: res,
                });
            })
    };

    tabOnClick = (value) => {
        this.setState({
            tab: value
        })
    };

    onChange = (e) => {
        let company = e.target.value;

        fetch('/api/user/projects', {
            headers: {
                'Content-type': 'application/json'
            },
            method: 'get'
        })
            .then(res => res.json())
            .then(res => {
                if (company === 'All'){
                    this.setState({
                        projects: res,
                    })
                } if (company === 'Microsoft') {
                    let Microsoft = res.filter((res) => {
                            return(
                                res.company === 'Microsoft'
                            )
                        }
                    );
                    this.setState({
                        projects: Microsoft
                    });
                } if (company === 'Google') {
                    let Google = res.filter((res) => {
                            return(
                                res.company === 'Google'
                            )
                        }
                    );
                    this.setState({
                        projects: Google
                    });
                } if (company === 'Symu.co') {
                    let Symu = res.filter((res) => {
                            return(
                                res.company === 'Symu.co'
                            )
                        }
                    );
                    this.setState({
                        projects: Symu
                    });
                } if (company === 'JCD.pl') {
                    let JCD = res.filter((res) => {
                            return(
                                res.company === 'JCD.pl'
                            )
                        }
                    );
                    this.setState({
                        projects: JCD
                    });
                } if (company === 'Facebook') {
                    let Facebook = res.filter((res) => {
                            return(
                                res.company === 'Facebook'
                            )
                        }
                    );
                    this.setState({
                        projects: Facebook
                    });
                } if (company === 'Themeforest') {
                    let Themeforest = res.filter((res) => {
                            return(
                                res.company === 'Themeforest'
                            )
                        }
                    );
                    this.setState({
                        projects: Themeforest
                    });
                }
            })
    };

    render() {
        let workflowTabSelect = ['All', 'Microsoft', 'Google', 'Symu.co', 'JCD.pl', 'Facebook', 'Themeforest'];

        return (
            <div>
                <div className="workflowHeader">
                    <ul className="workflowTabsList">
                        <li className={this.state.tab === 'allProjects' ? 'allProjects-active' : 'allProjects'}
                            onClick={() => this.tabOnClick ('allProjects')}
                        >
                            All Projects ({this.state.projects.length})
                        </li>
                        <li className={this.state.tab === 'dragNDrop' ? 'dragNDrop-active' : 'dragNDrop'}
                            onClick={() => this.tabOnClick ('dragNDrop')}
                        >
                            Workflow
                        </li>
                    </ul>
                    <div className="workflowSelectWrap">
                        <span>Show projects:</span>
                        <Select data={workflowTabSelect} onChange={this.onChange} />
                    </div>
                </div>
                <div className="workflowBody">
                    {
                        this.state.tab === 'allProjects'
                            ?
                            <div className="workflowBodyProjWrap">
                                <AllProjects data={this.state.projects}/>
                            </div>
                            :
                            <div className="workflowBodyDndWrap">
                                <TrelloDnd />
                            </div>
                    }
                </div>
            </div>
        )
    }
}

export default Workflow;