import React from 'react';
import logo from '../../assets/images/virtus-logo.png';
import './Authentication.css';
import {Tabs, Tab} from 'material-ui/Tabs';
import Registration from "./registration/Registration";
import Login from "./login/Login";

const styles = {
    ActiveTab: {
        backgroundColor: '#2196f3',
        height: 5,
        marginTop: -10,
    },
    Tabs: {
        backgroundColor: '#2f3242',
        width: 300,
        height: "100%"
    },
    TabsFont: {
        fontSize: 20,
        textTransform: 'capitalize',
        letterSpacing: 1,
        height: 85
    },
    AuthCont: {
        maxWidth: 580,
        width: '100%',
        position: 'absolute',
        left: '50%',
        top: '50%',
        transform: 'Translate(-50%, -50%)',
        textAlign: 'center',
    }

};

class Authentication extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            value: 'log',
        };
    }

    handleChange = (value) => {
        this.setState({
            value: value,
        });
    };

    render() {
        return (
            <div className="authenticationPage">
                <div className="authenticator">
                    <div className="authHeader">
                        <div className="logoWrap">
                            <img src={logo} alt="Virtus Logo"/>
                            <h1>Virtus</h1>
                        </div>
                        <Tabs
                            value={this.state.value}
                            onChange={this.handleChange}
                            inkBarStyle={styles.ActiveTab}
                            tabItemContainerStyle={styles.Tabs}
                            tabTemplateStyle={styles.AuthCont}
                            initialSelectedIndex={1}
                        >
                            <Tab label="Registration" value="reg" style={styles.TabsFont}>
                                <div className="registration">
                                    <p>Hello</p>
                                    <Registration/>
                                </div>
                            </Tab>
                            <Tab label="Login" value="log" style={styles.TabsFont}>
                                <div className="login">
                                    <p>Welcome <span>Back</span></p>
                                    <Login/>
                                </div>
                            </Tab>
                        </Tabs>
                    </div>
                </div>
            </div>
        )
    }
}

export default Authentication;