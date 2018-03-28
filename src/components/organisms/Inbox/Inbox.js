import React from 'react';
import './Inbox.css';
import InboxMessages from "./InboxMessages";

class Inbox extends React.Component {
    render() {
        let inboxMessageItem = [
            {
                name: 'Michelle Stewart',
                ava: 'img/Michelle-Stewart.jpg',
                altAva: 'Michelle-Stewart-ava',
                time: 'Today, 5:32 PM',
                text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusm.',
                newMessage: true
            },
            {
                name: 'Jolene Slater',
                ava: 'img/Jolene-Slater.jpg',
                altAva: 'Jolene-Slater-ava',
                time: 'Today, 5:32 PM',
                text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusm.',
                newMessage: true
            },
            {
                name: 'Lyall Roach',
                ava: 'img/Lyall-Roach.jpg',
                altAva: 'Lyall-Roach-ava',
                time: 'Today, 5:32 PM',
                text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusm.',
                newMessage: false
            },
            {
                name: 'Michelle Stewart',
                ava: 'img/Michelle-Stewart.jpg',
                altAva: 'Michelle-Stewart-ava',
                time: 'Today, 5:32 PM',
                text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusm.',
                newMessage: false
            },
        ];

        return (
            <div style={{width: "400px"}}>
                <div className="inboxHeader">
                    <p>Inbox</p>(<span>{inboxMessageItem.length}</span>)
                </div>
                <InboxMessages data={inboxMessageItem} />
            </div>
        )
    }
}

export default Inbox;

// import React from 'react';
// import './Inbox.css';
// import InboxMessages from "./InboxMessages";
//
// let inboxMessageItem = [
//     {
//         name: 'Michelle Stewart',
//         ava: 'img/Michelle-Stewart.jpg',
//         altAva: 'Michelle-Stewart-ava',
//         time: 'Today, 5:32 PM',
//         text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusm.',
//         newMessage: true
//     },
//     {
//         name: 'Jolene Slater',
//         ava: 'img/Jolene-Slater.jpg',
//         altAva: 'Jolene-Slater-ava',
//         time: 'Today, 5:32 PM',
//         text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusm.',
//         newMessage: true
//     },
//     {
//         name: 'Lyall Roach',
//         ava: 'img/Lyall-Roach.jpg',
//         altAva: 'Lyall-Roach-ava',
//         time: 'Today, 5:32 PM',
//         text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusm.',
//         newMessage: false
//     },
//     {
//         name: 'Michelle Stewart',
//         ava: 'img/Michelle-Stewart.jpg',
//         altAva: 'Michelle-Stewart-ava',
//         time: 'Today, 5:32 PM',
//         text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusm.',
//         newMessage: false
//     },
// ];
//
// class Inbox extends React.Component {
//     constructor(props){
//         super(props);
//         this.state = {
//             inboxMessageItem: []
//         }
//     }
//     componentWillMount() {
//         this.setState({
//             inboxMessageItem: inboxMessageItem,
//         });
//     }
//     render() {
//         return (
//             <div style={{width: "400px"}}>
//                 <div className="inboxHeader">
//                     <p>Inbox</p>(<span>{inboxMessageItem.length}</span>)
//                 </div>
//                 <InboxMessages data={this.state.inboxMessageItem} />
//             </div>
//         )
//     }
// }