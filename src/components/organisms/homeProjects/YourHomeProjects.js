import React from 'react';
import IconButton from 'material-ui/IconButton';
import FontIcon from 'material-ui/FontIcon';

import './YourHomeProjects.css';

class YourHomeProjects extends React.Component {
    render() {
        return (
            <ul className="yourProjectList">
                {
                    this.props.data.map((item, index) => {
                        return(
                            <li key={index}>
                                <div className="yourProjectAva">
                                    <img src={item.userAva} alt="User Avatar" />
                                </div>
                                <div className="yourProjectTextWrap">
                                    <div className="yourProjectText">
                                        <p>{item.theme}</p>
                                        <span>{item.company} </span>
                                        <span>${item.price}</span>
                                    </div>
                                    <div>
                                        <IconButton>
                                            <FontIcon color={"#9ea3b4"} className="material-icons">more_vert</FontIcon>
                                        </IconButton>
                                    </div>
                                </div>
                            </li>
                        )
                    })
                }
            </ul>
        )
    }
}

export default YourHomeProjects;