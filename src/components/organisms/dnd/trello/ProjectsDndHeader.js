import React from 'react';
import './TrelloDnd.css';

class ProjectsDndHeader extends React.Component {
    render() {
        return (
            <div>
                <p className="ProjectsDndHeaderStatus">
                    {this.props.lineHeadTitle}
                </p>
                <p className="ProjectsDndHeaderProject">
                    {this.props.cards.length} Project{this.props.cards.length === 1 ?  '' : 's'}
                </p>
            </div>
        )
    }
}

export default ProjectsDndHeader;