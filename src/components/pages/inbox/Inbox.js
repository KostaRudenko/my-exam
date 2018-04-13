import React from 'react';
import Select from "../../atoms/select/Select";

import './Inbox.css';

class Inbox extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            tab: 'inbox'
        }
    }

    tabOnClick = (value) => {
        this.setState({
            tab: value
        })
    };

    render() {
        let inboxTabSelect = ['All Dates', 'Today', 'Yesterday'];

        return (
            <div>
                <div className="inboxHeader">
                    <ul className="inboxTabsList">
                        <li className={this.state.tab === 'inbox' ? 'inbox-active' : 'inbox'}
                            onClick={() => this.tabOnClick ('inbox')}
                        >
                            <i className="material-icons">move_to_inbox</i> Inbox ()
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
                    <div className="inboxSelectWrap">
                        <span>Filter messages:</span>
                        <Select data={inboxTabSelect} onChange={this.onChange} />
                    </div>
                </div>
                <div className="inboxBody">
                    {
                        this.state.tab === 'inbox' ? <div>inbox</div> :
                            this.state.tab === 'sent' ? <div>sent</div> :
                                this.state.tab === 'trash' ? <div>trash</div> : false
                    }
                </div>
            </div>
        )
    }
}

export default Inbox;