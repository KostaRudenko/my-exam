import React from 'react';
import { BootstrapTable, TableHeaderColumn } from 'react-bootstrap-table';
import 'react-bootstrap-table/dist/react-bootstrap-table-all.min.css';
import 'bootstrap/dist/css/bootstrap.css';

import './AllProjects.css';

class AllProjects extends React.Component {
    projectTitle = (cell, row) => {
        return (
            <div className="projectTitle">
               <span>{row.theme}</span>
                <p>{row.company}</p>
            </div>
        )
    };


    value = (cell, row) => {
        return (
            <div>
                <p>${row.price}</p>
            </div>
        )
    };

    deadline = (cell, row) => {
        return (
            <div>
                <p>{row.deadline}</p>
                <span>{row.deadlineTimeLeft}</span>
            </div>
        )
    };

    timeSpent = (cell, row) => {
        return (
            <div>
                <p>{row.timeSpent}</p>
            </div>
        )
    };

    progress = (cell, row) => {
        return (
            <div>
                <span>{row.progress}</span>
            </div>
        )
    };

    status = (cell, row) => {
        return (
            <div>
                <p>{row.status}</p>
            </div>
        )
    };

    assignedTo = (cell, row) => {
        return (
            <div>
                <p>{row.assignedTo}</p>
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
                    options={options}>
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
                    >
                        Assigned to
                    </TableHeaderColumn>
                </BootstrapTable>
            </div>
        );
    }
}

export default AllProjects;