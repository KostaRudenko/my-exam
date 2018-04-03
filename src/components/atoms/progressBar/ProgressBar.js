import React from 'react';
import LinearProgress from 'material-ui/LinearProgress';

class ProgressBar extends React.Component {
    render() {
        let progressBarColor;
        if (this.props.data <= 30) {
            progressBarColor = "#fff"
        } else if (this.props.data <= 90) {
            progressBarColor = "#2196f3"
        } else if (this.props.data === 100) {
            progressBarColor = "#4caf50"
        }

        return (
            <LinearProgress mode="determinate" style={{background: '#9ea3b4', height: 6}} color={progressBarColor} value={this.props.data} />
        )
    }
}

export default ProgressBar;