import  React from 'react';
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
                    <i className="material-icons">keyboard_arrow_down</i>
                </div>
            </div>
        )
    }
}

export default Select;