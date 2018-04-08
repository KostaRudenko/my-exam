import React from 'react';
import LinearProgress from 'material-ui/LinearProgress';

class ProgressBar extends React.Component {
    render() {
        let progressBarColor = (
            this.props.data <= 30 ? '#fff' :
            this.props.data <= 90 ? '#2196f3' :
            this.props.data === 100 ? '#4caf50' : 'red'
        );

        return (
            <LinearProgress mode="determinate" style={{background: '#9ea3b4', height: 6}} color={progressBarColor} value={this.props.data} />
        )
    }
}

export default ProgressBar;