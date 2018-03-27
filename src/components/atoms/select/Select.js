import  React from 'react';
import FontAwesomeIcon from '@fortawesome/react-fontawesome';
import faAngleDown from '@fortawesome/fontawesome-free-solid/faAngleDown';
import './Select.css';

class Select extends React.Component {
    render() {
        return (
            <div className="selectWrap">
                <select onChange={this.props.onChange}>
                    {
                        this.props.data.map((item, index) => {
                            return (
                                <option key={index} value={item}>{item}</option>
                            );
                        })
                    }
                </select>
                <div className="arrow">
                    <FontAwesomeIcon icon={faAngleDown} style={{color: '#909cb7'}}/>
                </div>
            </div>
        )
    }
}

export default Select;