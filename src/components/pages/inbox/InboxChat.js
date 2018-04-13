import React from 'react';
import Select from "../../atoms/select/Select";
import InboxMessages from "../../organisms/Inbox/InboxMessages";

import './InboxChat.css';

class InboxChat extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            tab: 'inbox',
            inboxMessageItem: [],
            newMsg: []
        }
    }

    tabOnClick = (value) => {
        this.setState({
            tab: value
        })
    };

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
        let inboxTabSelect = ['All Dates', 'Today', 'Yesterday'];

        return (
            <div>
                <div className="inboxChatHeader">
                    <ul className="inboxChatTabsList">
                        <li className={this.state.tab === 'inbox' ? 'inbox-active' : 'inbox'}
                            onClick={() => this.tabOnClick ('inbox')}
                        >
                            <i className="material-icons">move_to_inbox</i> Inbox ({this.state.newMsg.length})
                        </li>
                        <li className={this.state.tab === 'sent' ? 'sent-active' : 'sent'}
                            onClick={() => this.tabOnClick ('sent')}
                        >
                            <i className="material-icons">send</i> Sent
                        </li>
                        <li className={this.state.tab === 'trash' ? 'trash-active' : 'trash'}
                            onClick={() => this.tabOnClick ('trash')}
                        >
                            <i className="material-icons">delete</i> Trash
                        </li>
                    </ul>
                    <div className="inboxSelectChatWrap">
                        <span>Filter messages:</span>
                        <Select data={inboxTabSelect} onChange={this.onChange} />
                    </div>
                </div>
                <div>
                    {
                        this.state.tab === 'inbox' ?
                            <div className="inboxChatBody">
                                <div className="inboxChatInbox">
                                    <InboxMessages data={this.state.inboxMessageItem.slice(0,4)} />
                                    <button>123</button>
                                </div>
                                <div className="inboxChatMessages">CHAT</div>
                                <div className="inboxChatUserInfo">User INFO</div>
                            </div> :
                            this.state.tab === 'sent' ? <div>sent</div> :
                                this.state.tab === 'trash' ? <div>trash</div> : false
                    }
                </div>
            </div>
        )
    }
}

export default InboxChat;