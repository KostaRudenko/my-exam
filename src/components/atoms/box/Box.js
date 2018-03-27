import React from 'react';
import './Box.css';

class Box extends React.Component {
    render() {
        return (
            <div className="box">
                {this.props.children}
            </div>
        )
    }
}

export default Box;