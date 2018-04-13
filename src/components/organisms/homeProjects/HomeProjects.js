import React from 'react';
import './HomeProjects.css';
import YourHomeProjects from "./YourHomeProjects";

class HomeProjects extends React.Component {
    constructor() {
        super();
        this.state = {
            user: []
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
                let user = res.filter((e) => {
                        return(
                            e.userName === 'Dominic Lynton'
                        )
                    }
                );
                this.setState({
                    user: user
                });
            });
    };

    render() {
        return (
            <div>
                <div className="homeProjectsHeader">
                    <p>Your Projects</p>
                </div>
                <YourHomeProjects data={this.state.user} />
            </div>
        )
    }
}

export default HomeProjects;