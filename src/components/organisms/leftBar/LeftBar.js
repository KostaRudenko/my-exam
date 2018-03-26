import React from 'react';
import { NavLink } from 'react-router-dom';
import IconButton from 'material-ui/IconButton';
import Badge from 'material-ui/Badge';
import './LeftBar.css';

class LeftBar extends React.Component {
    constructor() {
        super();
        this.state = {
            notification: false
        };
    };

    componentWillMount () {
        setTimeout(() => {
            this.setState({
                notification: true
            })
        },3000);
    };

    render() {
        let style = {
            iconBtn: {
                padding: 0
            },
            notifBadgeSett: {
                padding: 0
            },
            notifBadgeStyle: {
                background: "#2196f3",
                width: 10,
                height: 10,
                top: 7,
                right: 3,
                border: "2px solid #2f3242"
            }
        };
        return (
            <ul className="leftBarNavigation">
                <li>
                    <NavLink to="/" exact activeClassName="activeNavigation">
                        <IconButton style={style.iconBtn} tooltip="Home">
                            <i className="material-icons">home</i>
                        </IconButton>
                    </NavLink>
                </li>
                <li>
                    <NavLink to="/projects" exact activeClassName="activeNavigation">
                        <IconButton style={style.iconBtn} tooltip="Projects">
                            <i className="material-icons">menu</i>
                        </IconButton>
                    </NavLink>
                </li>
                <li>
                    <NavLink to="/workflow" exact activeClassName="activeNavigation">
                        <IconButton style={style.iconBtn} tooltip="Raports">
                            <i className="material-icons">trending_up</i>
                        </IconButton>
                    </NavLink>
                </li>
                <li>
                    <NavLink to="/inbox" exact activeClassName="activeNavigation">
                        <Badge
                            badgeContent={''}
                            secondary={true}
                            style={style.notifBadgeSett}
                            badgeStyle={this.state.notification ? style.notifBadgeStyle : {display:"none"}}
                        >
                            <IconButton style={style.iconBtn} tooltip="Inbox">
                                <i className="material-icons">mail</i>
                            </IconButton>
                        </Badge>
                    </NavLink>
                </li>
                <li>
                    <NavLink to="/settings" exact activeClassName="activeNavigation">
                        <IconButton style={style.iconBtn} tooltip="Settings">
                            <i className="material-icons">group</i>
                        </IconButton>
                    </NavLink>
                </li>
            </ul>
        )
    }
}

export default LeftBar;