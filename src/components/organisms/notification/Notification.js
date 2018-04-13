import React from 'react';
import Badge from 'material-ui/Badge';
import Popover from 'material-ui/Popover';
import IconButton from 'material-ui/IconButton';
import FontIcon from 'material-ui/FontIcon';
import InboxMessages from "../Inbox/InboxMessages";
import Menu from 'material-ui/Menu';

import './Notification.css';

class NotificationBadge extends React.Component {
    constructor() {
        super();
        this.state = {
            notification: false,
            openPopover: false,
            inboxMessageItem: []

        };
    };

    componentWillMount () {
        setTimeout(() => {
            this.setState({
                notification: true
            })
        },3000);

        fetch('/api/user/messages/inboxMessage', {
            headers: {
                'Content-type': 'application/json'
            },
            method: 'get'
        })
            .then(res => res.json())
            .then(res => {
                this.setState({
                    inboxMessageItem: res,
                });
            })
    };

    handleRequestPopoverClose = () => {
        this.setState({
            openPopover: false
        });
    };

    handleClickNotification = (e) => {
        e.preventDefault();

        this.setState({
            openPopover: true,
            anchorEl: e.currentTarget,
        });
    };

    render() {
        let style = {
            notifBadgeStyle: {
                background: "#2196f3",
                width: 13,
                height: 13,
                top: 13,
                right: 7,
                border: "2px solid #2f3242"
            }
        };

        return (
            <Badge
                badgeContent={''}
                secondary={true}
                className="badge"
                badgeStyle={this.state.notification ? style.notifBadgeStyle : { display:"none" }}
                onClick={this.handleClickNotification}
            >
                <IconButton iconStyle={{fontSize: 30}} tooltip="Notifications">
                    <FontIcon color={"#fff"} className="material-icons">notifications_none</FontIcon>
                </IconButton>
                <Popover
                    open={this.state.openPopover}
                    anchorEl={this.state.anchorEl}
                    anchorOrigin={{horizontal: 'left', vertical: 'bottom'}}
                    targetOrigin={{horizontal: 'left', vertical: 'top'}}
                    onRequestClose={this.handleRequestPopoverClose}
                >
                    <Menu
                        maxHeight={400}
                        width={350}
                        listStyle={{background: '#2f3242'}}
                        style={{border: '2px solid #2b2d3c'}}

                    >
                        <InboxMessages data={this.state.inboxMessageItem.slice(0,5)} />
                    </Menu>
                </Popover>
            </Badge>
        )
    }
}

export default NotificationBadge;