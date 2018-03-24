import React from 'react';
import  { withRouter } from 'react-router-dom';

class Login extends React.Component {
    constructor(){
        super();
        this.state = {
            username: '',
            password: ''
        }
    }

    handleSubmit = (e) => {
        e.preventDefault();
        const logData = {
            login: this.state.username,
            pass: this.state.password,
        };
        fetch('/api/user/login', {
            headers: {
                'Content-type': 'application/json'
            },
            method: 'post',
            body: JSON.stringify(logData)
        })
            .then(res => {
                return res.json();
            })
            .then(res => {
                localStorage.setItem('user',res.check);
                localStorage.setItem('userName',this.state.username);
                this.props.history.push('/')
            });

    };

    handleChange = (e) => {
        let name = e.target.name;
        this.setState({
            [name]:e.target.value
        })
    };

    render() {
        return (
            <div>
                <form onSubmit={this.handleSubmit}>
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
                    <button className="authBtn">Login</button>
                </form>
            </div>

        );
    }
}

export default withRouter (Login);