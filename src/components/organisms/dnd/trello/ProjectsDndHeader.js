import React from 'react';

class ProjectsDndHeader extends React.Component {
    render() {
        return (
            <div>
                <p style={{
                        color: "#fff",
                        fontSize: '18px',
                        fontFamily: 'Montserrat',
                    }}
                >
                    {this.props.lineHeadTitle}
                </p>
                <p style={{
                        color: "#9ea3b4",
                        fontSize: '14px',
                        fontFamily: 'Montserrat',
                        marginBottom: '30px'
                    }}
                >
                    {this.props.cards.length} Project{this.props.cards.length === 1 ?  '' : 's'}
                </p>
            </div>
        )
    }
}

export default ProjectsDndHeader;