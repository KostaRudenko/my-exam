import React from 'react';
import { BootstrapTable, TableHeaderColumn } from 'react-bootstrap-table';

import './RaportTable.css';

function getCaret(direction) {
    if (direction === 'asc') {
        return (
            <i className="material-icons">keyboard_arrow_up</i>
        );
    }
    if (direction === 'desc') {
        return (
            <i className="material-icons">keyboard_arrow_down</i>
        );
    }
    return (
       <i className="material-icons">keyboard_arrow_down</i>
    );
}

class RaportTable extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            raportTable: []
        };
    }

    componentWillMount() {
        fetch('/api/user/table/raport-table', {
            headers: {
                'Accept': 'application/json',
                'Content-type': 'application/json'
            },
            method: 'get'
        })
            .then(res => res.json())
            .then(res => {
                this.setState({
                    raportTable: res,
                });
            })
    };

    campaing = (cell, row) => {
        return (
            <div>
                <p>{row.text}</p>
            </div>
        )
    };

    time = (cell, row) => {
        return (
            <div>
                <p>{row.time}</p>
            </div>
        )
    };

    views = (cell, row) => {
        return (
            <div>
                <p>{row.views}</p>
            </div>
        )
    };

    visitors = (cell, row) => {
        return (
            <div>
                <p>{row.visitors}</p>
            </div>
        )
    };

    ctr = (cell, row) => {
        return (
            <div>
                <p>{row.ctr}%</p>
            </div>
        )
    };

    cpc = (cell, row) => {
        return (
            <div>
                <p>${row.cpc}</p>
            </div>
        )
    };

    cpv = (cell, row) => {
        return (
            <div>
                <p>${row.cpv}</p>
            </div>
        )
    };

    cpm = (cell, row) => {
        return (
            <div>
                <p>${row.cpm}</p>
            </div>
        )
    };

    status = (cell, row) => {
        return (
            <div className="statusWrap">
                <span className={row.status === 'Active' ? 'activeStatus' : 'status'}> </span>
                <p>{row.status}</p>
            </div>
        )
    };

    render() {
        return (
            <div>
                <BootstrapTable
                    trStyle={{
                        background: "#2b2d3c",
                        borderBottom: "1px solid #9ca1b2",
                        height: "70px"
                    }}
                    headerStyle={{
                        background: "#3a3e52",
                        color: "#9ea3b4",
                        padding: "15px 0",
                        fontSize: "14px",
                        fontFamily: "Montserrat"
                    }}
                    tableStyle={{border: 0}}
                    data={this.state.raportTable}
                >
                    <TableHeaderColumn
                        dataField='campaing'
                        dataFormat={this.campaing}
                        thStyle={{border: "none"}}
                        tdStyle={{
                            verticalAlign: "middle",
                            border: "none"
                        }}
                        dataSort
                        width='300px'
                        caretRender={getCaret}
                    >
                        Campaing
                    </TableHeaderColumn>

                    <TableHeaderColumn
                        dataField='time'
                        thStyle={{border: "none"}}
                        dataFormat={this.time}
                        tdStyle={{
                            verticalAlign: "middle",
                            border: "none"
                        }}
                        isKey
                        dataSort
                        caretRender={getCaret}
                    >
                        Time
                    </TableHeaderColumn>

                    <TableHeaderColumn
                        dataField='views'
                        thStyle={{border: "none"}}
                        dataFormat={this.views}
                        tdStyle={{
                            verticalAlign: "middle",
                            border: "none"
                        }}
                        dataSort
                        caretRender={getCaret}
                    >
                        Views
                    </TableHeaderColumn>

                    <TableHeaderColumn
                        dataField='visitors'
                        thStyle={{border: "none"}}
                        dataFormat={this.visitors}
                        tdStyle={{
                            verticalAlign: "middle",
                            border: "none"
                        }}
                        dataSort
                        caretRender={getCaret}
                    >
                        Visitors
                    </TableHeaderColumn>

                    <TableHeaderColumn
                        dataField='ctr'
                        thStyle={{border: "none"}}
                        dataFormat={this.ctr}
                        tdStyle={{
                            border: "none",
                            verticalAlign: "middle"
                        }}
                        dataSort
                        caretRender={getCaret}
                    >
                        CTR
                    </TableHeaderColumn>

                    <TableHeaderColumn
                        dataField='cpc'
                        thStyle={{border: "none"}}
                        dataFormat={this.cpc}
                        tdStyle={{
                            verticalAlign: "middle",
                            border: "none"
                        }}
                        dataSort
                        caretRender={getCaret}
                    >
                        CPC
                    </TableHeaderColumn>

                    <TableHeaderColumn
                        dataField='cpv'
                        thStyle={{border: "none"}}
                        dataFormat={this.cpv}
                        tdStyle={{
                            verticalAlign: "middle",
                            border: "none"
                        }}
                        dataSort
                        caretRender={getCaret}
                    >
                        CPV
                    </TableHeaderColumn>

                    <TableHeaderColumn
                        dataField='cpm'
                        thStyle={{border: "none"}}
                        dataFormat={this.cpm}
                        tdStyle={{
                            verticalAlign: "middle",
                            border: "none"
                        }}
                        dataSort
                        caretRender={getCaret}
                    >
                        CPM
                    </TableHeaderColumn>

                    <TableHeaderColumn
                        dataField='status'
                        thStyle={{border: "none"}}
                        dataFormat={this.status}
                        tdStyle={{
                            verticalAlign: "middle",
                            border: "none"
                        }}
                        dataSort
                        caretRender={getCaret}
                    >
                        Status
                    </TableHeaderColumn>
                </BootstrapTable>
            </div>
        )
    }
}

export default RaportTable;