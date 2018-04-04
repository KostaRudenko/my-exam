import React from 'react';
import { BootstrapTable, TableHeaderColumn } from 'react-bootstrap-table';
import IconMenu from 'material-ui/IconMenu';
import IconButton from 'material-ui/IconButton';
import FontIcon from 'material-ui/FontIcon';
import MenuItem from 'material-ui/MenuItem';

import 'react-bootstrap-table/dist/react-bootstrap-table-all.min.css';
import 'bootstrap/dist/css/bootstrap.css';

import './AllProjects.css';
import ProgressBar from "../../atoms/progressBar/ProgressBar";

class AllProjects extends React.Component {
    projectTitle = (cell, row) => {
        return (
            <div className="projectTitle">
               <p>{row.theme}</p>
                <span>{row.company}</span>
            </div>
        )
    };

    value = (cell, row) => {
        return (
            <div className="priceWrap">
                <p>${row.price}</p>
            </div>
        )
    };

    deadline = (cell, row) => {
        return (
            <div className="deadLineWrap">
                <p>{row.deadline}</p>
                <span>{row.deadlineTimeLeft}</span>
            </div>
        )
    };

    timeSpent = (cell, row) => {
        return (
            <div className="timeSpentWrap">
                <p>{row.timeSpent}</p>
            </div>
        )
    };

    progress = (cell, row) => {
        return (
            <div className="progressBarWrap">
                <p>{row.progress}%</p>
                <ProgressBar data={row.progress} />
            </div>
        )
    };

    status = (cell, row) => {
        return (
            <div className="statusWrap">
                <p>{row.status}</p>
            </div>
        )
    };

    assignedTo = (cell, row) => {
        return (
            <div>
                <div className="assignedToUserAvaWrap">
                    <img src={row.userAva} alt="" />
                </div>
                <div className="assignedToTextWrap">
                    <div className="assignedToText">
                        <p>{row.userName}</p>
                        <span>{row.position}</span>
                    </div>
                    <div>
                        <IconMenu
                            iconButtonElement={
                                <IconButton>
                                    <FontIcon color={"#9ea3b4"} className="material-icons">more_vert</FontIcon>
                                </IconButton>
                            }>
                            <MenuItem primaryText="Send Message" />
                            <MenuItem primaryText="Delete" />
                        </IconMenu>
                    </div>

                </div>
            </div>
        )
    };

    render() {
        const options = {
            sizePerPage: 7,
            hideSizePerPage: true
        };

        return (
            <div>
                <BootstrapTable
                    trStyle={{background: '#3a3e52', borderBottom: "10px solid #2b2d3c"}}
                    headerStyle={{background: "#2b2d3c", color: "#9ea3b4"}}
                    tableStyle={{border: 0}}
                    data={this.props.data}
                    pagination
                    options={options}
                >
                    <TableHeaderColumn
                        dataField="userName"
                        dataFormat={this.projectTitle}
                        thStyle={{border: "none"}}
                        isKey
                        tdStyle={{verticalAlign: "middle", border: "none"}}
                    >
                        Project title
                    </TableHeaderColumn>

                    <TableHeaderColumn
                        dataField="value"
                        thStyle={{border: "none"}}
                        dataFormat={this.value}
                        tdStyle={{verticalAlign: "middle", border: "none"}}
                    >
                        Value
                    </TableHeaderColumn>

                    <TableHeaderColumn
                        dataField="deadline"
                        thStyle={{border: "none"}}
                        dataFormat={this.deadline}
                        tdStyle={{verticalAlign: "middle", border: "none"}}
                    >
                        Deadline
                    </TableHeaderColumn>

                    <TableHeaderColumn
                        dataField="timeSpent"
                        thStyle={{border: "none"}}
                        dataFormat={this.timeSpent}
                        tdStyle={{verticalAlign: "middle", border: "none"}}
                    >
                        Time spent
                    </TableHeaderColumn>

                    <TableHeaderColumn
                        dataField="progress"
                        thStyle={{border: "none"}}
                        dataFormat={this.progress}
                        tdStyle={{border: "none", verticalAlign: "middle"}}
                    >
                        Progress
                    </TableHeaderColumn>

                    <TableHeaderColumn
                        dataField="status"
                        thStyle={{border: "none"}}
                        dataFormat={this.status}
                        tdStyle={{verticalAlign: "middle", border: "none"}}
                    >
                        Status
                    </TableHeaderColumn>

                    <TableHeaderColumn
                        dataField="assignedTo"
                        thStyle={{border: "none"}}
                        dataFormat={this.assignedTo}
                        tdStyle={{verticalAlign: "middle", border: "none"}}
                        width="300px"
                    >
                        Assigned to
                    </TableHeaderColumn>
                </BootstrapTable>
            </div>
        );
    }
}

export default AllProjects;