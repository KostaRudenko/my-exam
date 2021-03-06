import React from 'react';
import { BootstrapTable, TableHeaderColumn } from 'react-bootstrap-table';
import IconMenu from 'material-ui/IconMenu';
import IconButton from 'material-ui/IconButton';
import FontIcon from 'material-ui/FontIcon';
import MenuItem from 'material-ui/MenuItem';
import ProgressBar from "../../atoms/progressBar/ProgressBar";

import 'react-bootstrap-table/dist/react-bootstrap-table-all.min.css';
import 'bootstrap/dist/css/bootstrap.css';

import './AllProjects.css';

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
                <p>
                    {
                        row.progress === 0 ? 'Quened' :
                            row.progress <= 15 ? 'Planning' :
                                row.progress <= 40 ? 'Design' :
                                    row.progress <= 89 ? 'Development' :
                                        row.progress <= 99 ? 'Testing' :
                                            row.progress === 100 ? 'Completed' : ''
                    }
                </p>
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
                    tableHeaderClass='allProjTHeader'
                    trStyle={{
                        background: '#3a3e52',
                        borderBottom: "10px solid #2b2d3c"
                    }}
                    tableStyle={{border: 0}}
                    data={this.props.data}
                    pagination
                    options={options}
                >
                    <TableHeaderColumn
                        columnClassName='td-column-project'
                        className='td-header-string-project'
                        dataField="userName"
                        dataFormat={this.projectTitle}
                        thStyle={{border: "none"}}
                        isKey
                        tdStyle={{
                            verticalAlign: "middle",
                            border: "none",
                        }}
                    >
                        Project title
                    </TableHeaderColumn>

                    <TableHeaderColumn
                        columnClassName='td-column-value'
                        className='td-header-string-value'
                        dataField="value"
                        thStyle={{border: "none"}}
                        dataFormat={this.value}
                        tdStyle={{
                            verticalAlign: "middle",
                            border: "none"
                        }}
                    >
                        Value
                    </TableHeaderColumn>

                    <TableHeaderColumn
                        columnClassName='td-column-deadline'
                        className='td-header-string-deadline'
                        dataField="deadline"
                        thStyle={{border: "none"}}
                        dataFormat={this.deadline}
                        tdStyle={{
                            verticalAlign: "middle",
                            border: "none"
                        }}
                    >
                        Deadline
                    </TableHeaderColumn>

                    <TableHeaderColumn
                        columnClassName='td-column-time'
                        className='td-header-string-time'
                        dataField="timeSpent"
                        thStyle={{border: "none"}}
                        dataFormat={this.timeSpent}
                        tdStyle={{
                            verticalAlign: "middle",
                            border: "none"
                        }}
                    >
                        Time spent
                    </TableHeaderColumn>

                    <TableHeaderColumn
                        columnClassName='td-column-progress'
                        className='td-header-string-progress'
                        dataField="progress"
                        thStyle={{border: "none"}}
                        dataFormat={this.progress}
                        tdStyle={{
                            verticalAlign: "middle",
                            border: "none"
                        }}
                    >
                        Progress
                    </TableHeaderColumn>

                    <TableHeaderColumn
                        columnClassName='td-column-status'
                        className='td-header-string-status'
                        dataField="status"
                        thStyle={{border: "none"}}
                        dataFormat={this.status}
                        tdStyle={{
                            verticalAlign: "middle",
                            border: "none"
                        }}
                    >
                        Status
                    </TableHeaderColumn>

                    <TableHeaderColumn
                        columnClassName='td-column-assigned'
                        className='td-header-string-assigned'
                        dataField="assignedTo"
                        thStyle={{border: "none"}}
                        dataFormat={this.assignedTo}
                        tdStyle={{
                            verticalAlign: "middle",
                            border: "none"
                        }}
                    >
                        Assigned to
                    </TableHeaderColumn>
                </BootstrapTable>
            </div>
        );
    }
}

export default AllProjects;