import React from 'react';
import './InboxMessages.css';

class InboxMessages extends React.Component {
    render() {
        return (
            <ul className="inboxMessageList">
                {
                    this.props.data.map((item, index) => {
                        return(
                            <li key={index}>
                                <div className="avaWrap">
                                    <img src={item.ava} alt={item.altAva} />
                                </div>
                                <div className="textWrap">
                                    <div className="textWrapHeader">
                                        <p>{item.name}</p><span style={item.newMessage ? {color: "#2196f3"} : {color: "#9ca1b2"}}>{item.time}</span>
                                    </div>
                                    <p>{item.text}</p>
                                </div>
                            </li>
                        )
                    })
                }

            </ul>
        )
    }
}

export default InboxMessages;