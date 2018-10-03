import React from 'react';
import './TrelloDnd.css';

class ProjectsDndHeader extends React.Component {
    render() {
        let priceSum = 0;
        this.props.cards.forEach(function (e) {
            priceSum += e.price;
        });

        return (
            <div>
                <p className="ProjectsDndHeaderStatus">
                    {this.props.lineHeadTitle}
                </p>
                <p className="ProjectsDndHeaderProject">
                    {this.props.cards.length} Project{this.props.cards.length === 1 ?  '' : 's'}
                </p>
                <p className="ProjectsDndHeaderSummary">${priceSum}</p>
            </div>
        )
    }
}

export default ProjectsDndHeader;