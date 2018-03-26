import React from 'react';
import AppBar from 'material-ui/AppBar';
import IconButton from 'material-ui/IconButton';
import FontIcon from 'material-ui/FontIcon';
import FlatButton from 'material-ui/FlatButton';
import Badge from 'material-ui/Badge';
import { withRouter } from 'react-router-dom';
import IconMenu from 'material-ui/IconMenu';
import ListItem from 'material-ui/List/ListItem';
import MenuItem from 'material-ui/MenuItem';
import Avatar from 'material-ui/Avatar';

import logo from '../../assets/images/virtus-logo.png';
import topBarAva from '../../assets/images/top-bar-ava.png';

class TopBar extends React.Component {
    constructor() {
        super();
        this.state = {
            notification: false,
            menu: false,
        };
    };

    componentWillMount () {
        setTimeout(() => {
            this.setState({
                notification: true
            })
        },3000);
    };

    handleClick = () => {
        this.setState({
            menu: true
        })

    };

    handleClose = () => {
        this.setState({
          menu: false
        })
    };

    handleLogout = () => {
        localStorage.clear();
        this.props.history.push('/authentication')
    };

    handleSettings = () => {
        this.props.history.push('/settings')
    };

    render() {
        let style = {
            appBarStyle: {
                background: "#2f3242",
                display: "flex",
                alignItems: "center",
                height: 96
            },
            flatButtonLabel: {
                color: "#fff",
                textTransform: "capitalize",
                paddingRight: 16
            },
            flatButton: {
                borderRadius: 100,
                border: "2px solid #2196f3",
                height: 48,
                width: 125
            },
            notifBadgeSett: {
                padding: 0,
                marginLeft: 20
            },
            notifBadgeStyle: {
            background: "#2196f3",
            width: 10,
            height: 10,
            top: 13,
            right: 13
            }
        };
        return(
            <AppBar
                style={style.appBarStyle}
                iconElementLeft={
                    <div className="logoWrap">
                        <img src={logo} alt="Virtus Logo"/>
                        <h1>Virtus</h1>
                    </div>
                }
                iconElementRight={
                    <div style={{display: "flex", alignItems: "center"}}>
                        <FlatButton
                            hoverColor={"#404359"}
                            backgroundColor={"#2f3242"}
                            labelStyle={style.flatButtonLabel}
                            rippleColor={"#fff"}
                            style={style.flatButton}
                            label="Add"
                            labelPosition="before"
                            icon={<FontIcon style={{color: "#aac2ff"}} className="material-icons">add</FontIcon>}
                        />
                        <IconButton style={{marginLeft: 20}} tooltip="Search">
                            <FontIcon color={"#fff"} className="material-icons">search</FontIcon>
                        </IconButton>
                        <Badge
                            badgeContent={''}
                            secondary={true}
                            style={style.notifBadgeSett}
                            badgeStyle={this.state.notification ? style.notifBadgeStyle : {display:"none"}}
                        >
                            <IconButton tooltip="Notifications">
                                <FontIcon color={"#fff"} className="material-icons">notifications_none</FontIcon>
                            </IconButton>
                        </Badge>
                        <div style={{display: "flex", alignItems: "center", marginLeft: 20}}>
                            <ListItem
                                disabled={true}
                                style={{padding: 0}}
                            >
                                <Avatar
                                    size={50}
                                    src={topBarAva}
                                    style={{background: "transparent", cursor: "pointer"}}
                                    onClick={this.handleClick}
                                />
                            </ListItem>
                            <IconMenu
                                onClick={this.handleClick}
                                open={this.state.menu}
                                iconButtonElement={
                                    <IconButton tooltip="menu" >
                                        <FontIcon color={"#fff"} className="material-icons">arrow_drop_down</FontIcon>
                                    </IconButton>
                                }
                                onRequestChange={this.handleClose}
                                anchorOrigin={{
                                    horizontal: 'left',
                                    vertical: 'top'
                                }}
                                targetOrigin={{
                                    horizontal: 'left',
                                    vertical: 'top'
                                }}
                            >
                                <MenuItem primaryText="Settings" onClick={this.handleSettings}/>
                                <MenuItem onClick={this.handleLogout} primaryText="Logout" />
                            </IconMenu>
                        </div>

                    </div>
                }
            />
        )
    }
}

export default withRouter (TopBar);