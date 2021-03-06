import React from 'react';
import  { withRouter } from 'react-router-dom';

class Registration extends React.Component {
    constructor() {
        super();
        this.state = {
            username: '',
            password: ''
        }
    }

    handleChange = (e) => {
        let name = e.target.name;
        this.setState({
            [name]: e.target.value
        })
    };

    handleReg = () => {
        localStorage.setItem("username", JSON.stringify(this.state.username));
    };

    render() {
        return (
            <form onSubmit={this.handleReg}>
                <div className="inputWrap inputWrapUser">
                    <input type="text"
                           placeholder="Username"
                           value={this.state.username}
                           name="username"
                           onChange={this.handleChange}
                    />
                </div>
                <div className="inputWrap inputWrapPass">
                    <input type="password"
                           placeholder="Password"
                           value={this.state.password}
                           name="password"
                           onChange={this.handleChange}
                    />
                </div>
                <button className="authBtn">Register</button>
            </form>
        )
    }
}

export default withRouter (Registration);

