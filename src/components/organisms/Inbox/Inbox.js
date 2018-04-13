import React from 'react';
import './Inbox.css';
import InboxMessages from "./InboxMessages";

class Inbox extends React.Component {
    constructor() {
        super();
        this.state = {
            inboxMessageItem: [],
            newMsg: []
        }
    }

    componentWillMount() {
        fetch('/api/user/messages/inboxMessage', {
            headers: {
                'Content-type': 'application/json'
            },
            method: 'get'
        })
            .then(res => res.json())
            .then(res => {
                let newMsg = res.filter((res) => {
                        return(
                            res.newMessage
                        )
                    }
                );
                this.setState({
                    inboxMessageItem: res,
                    newMsg: newMsg
                });
            });
    };

    render() {
        return (
            <div className="homeInboxWrap">
                <div className="inboxHeader">
                    <p>Inbox</p>(<span>{this.state.newMsg.length}</span>)
                </div>
                <InboxMessages data={this.state.inboxMessageItem} />
            </div>
        )
    }
}

export default Inbox;