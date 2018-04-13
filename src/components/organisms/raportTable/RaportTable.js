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
            <div className="raportStatusWrap">
                <span className={row.status === 'Active' ? 'activeStatus' : 'status'}> </span>
                <p>{row.status}</p>
            </div>
        )
    };

    render() {
        return (
            <div>
                <BootstrapTable
                    tableHeaderClass='raportTHeader'
                    trStyle={{
                        background: "#2b2d3c",
                        borderBottom: "1px solid #9ca1b2",
                        height: "70px"
                    }}
                    tableStyle={{border: 0}}
                    data={this.state.raportTable}
                >
                    <TableHeaderColumn
                        columnClassName='td-column-campaing'
                        className='td-header-string-campaing'
                        dataField='campaing'
                        dataFormat={this.campaing}
                        thStyle={{border: "none"}}
                        tdStyle={{
                            whiteSpace: 'normal',
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
                        columnClassName='td-column-time'
                        className='td-header-string-time'
                        dataField='time'
                        thStyle={{border: "none"}}
                        dataFormat={this.time}
                        tdStyle={{
                            whiteSpace: 'normal',
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
                        columnClassName='td-column-views'
                        className='td-header-string-views'
                        dataField='views'
                        thStyle={{border: "none"}}
                        dataFormat={this.views}
                        tdStyle={{
                            whiteSpace: 'normal',
                            verticalAlign: "middle",
                            border: "none"
                        }}
                        dataSort
                        caretRender={getCaret}
                    >
                        Views
                    </TableHeaderColumn>

                    <TableHeaderColumn
                        columnClassName='td-column-visitors'
                        className='td-header-string-visitors'
                        dataField='visitors'
                        thStyle={{border: "none"}}
                        dataFormat={this.visitors}
                        tdStyle={{
                            whiteSpace: 'normal',
                            verticalAlign: "middle",
                            border: "none"
                        }}
                        dataSort
                        caretRender={getCaret}
                    >
                        Visitors
                    </TableHeaderColumn>

                    <TableHeaderColumn
                        columnClassName='td-column-ctr'
                        className='td-header-string-ctr'
                        dataField='ctr'
                        thStyle={{border: "none"}}
                        dataFormat={this.ctr}
                        tdStyle={{
                            whiteSpace: 'normal',
                            border: "none",
                            verticalAlign: "middle"
                        }}
                        dataSort
                        caretRender={getCaret}
                    >
                        CTR
                    </TableHeaderColumn>

                    <TableHeaderColumn
                        columnClassName='td-column-cpc'
                        className='td-header-string-cpc'
                        dataField='cpc'
                        thStyle={{border: "none"}}
                        dataFormat={this.cpc}
                        tdStyle={{
                            whiteSpace: 'normal',
                            verticalAlign: "middle",
                            border: "none"
                        }}
                        dataSort
                        caretRender={getCaret}
                    >
                        CPC
                    </TableHeaderColumn>

                    <TableHeaderColumn
                        columnClassName='td-column-cpv'
                        className='td-header-string-cpv'
                        dataField='cpv'
                        thStyle={{border: "none"}}
                        dataFormat={this.cpv}
                        tdStyle={{
                            whiteSpace: 'normal',
                            verticalAlign: "middle",
                            border: "none"
                        }}
                        dataSort
                        caretRender={getCaret}
                    >
                        CPV
                    </TableHeaderColumn>

                    <TableHeaderColumn
                        columnClassName='td-column-cpm'
                        className='td-header-string-cpm'
                        dataField='cpm'
                        thStyle={{border: "none"}}
                        dataFormat={this.cpm}
                        tdStyle={{
                            whiteSpace: 'normal',
                            verticalAlign: "middle",
                            border: "none"
                        }}
                        dataSort
                        caretRender={getCaret}
                    >
                        CPM
                    </TableHeaderColumn>

                    <TableHeaderColumn
                        columnClassName='td-column-status-raport'
                        className='td-header-string-status-raport'
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