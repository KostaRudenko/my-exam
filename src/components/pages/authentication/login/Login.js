import React from 'react';
import  { withRouter } from 'react-router-dom';

class Login extends React.Component {
    handleLog = () => {
        const logData = {
            login: this.login.value,
            pass: this.pass.value,
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
                localStorage.setItem('user', res.check);
                this.props.history.push('/')
            });
    };

    render() {
        return (
            <div>
                <div className="inputWrap inputWrapUser">
                        <input type="text"
                               placeholder="Username"
                               ref={el => this.login = el}
                               name="username"
                        />
                    </div>
                    <div className="inputWrap inputWrapPass">
                        <input type="password"
                               placeholder="Password"
                               ref={el => this.pass = el}
                               name="password"
                        />
                    </div>
                    <button onClick={this.handleLog} className="authBtn">Login</button>
            </div>
        );
    }
}

export default withRouter (Login);