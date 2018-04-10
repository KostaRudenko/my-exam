import React from 'react';
import ReactHighcharts from 'react-highcharts';
import Select from "../../../atoms/select/Select";
import './SalesReportChart.css';

//config chart
import SalesReport from '../../../../config/SalesReportChart.config';

class SalesReportChart extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            dataSalesReport: []
        }
    }

    componentWillMount() {
        fetch('/api/user/chart/sales-report/last-year', {
            headers: {
                'Accept': 'application/json',
                'Content-type': 'application/json'
            },
            method: 'get',
        })
            .then(res => res.json())
            .then(res => {
                this.setState({
                    dataSalesReport: res
                });
                let salesReport = this.salesReportChart.getChart();
                salesReport.series[0].setData(this.state.dataSalesReport);
            });
    }

    onChange = (e) => {
        let period = (e.target.value);

        if (period === 'Year') {
            fetch('/api/user/chart/sales-report/last-year', {
                headers: {
                    'Accept': 'application/json',
                    'Content-type': 'application/json'
                },
                method: 'get',
            })
                .then(res => res.json())
                .then(res => {
                    this.setState({
                        dataSalesReport: res
                    });
                    let salesReport = this.salesReportChart.getChart();
                    salesReport.series[0].setData(this.state.dataSalesReport);
                });
        }
        if (period === 'Month') {
            fetch('/api/user/chart/sales-report/last-month', {
                headers: {
                    'Accept': 'application/json',
                    'Content-type': 'application/json'
                },
                method: 'get',
            })
                .then(res => res.json())
                .then(res => {
                    this.setState({
                        dataSalesReport: res
                    });
                    let salesReport = this.salesReportChart.getChart();
                    salesReport.series[0].setData(this.state.dataSalesReport);
                });
        }
        if (period === 'Week') {
            fetch('/api/user/chart/sales-report/last-week', {
                headers: {
                    'Accept': 'application/json',
                    'Content-type': 'application/json'
                },
                method: 'get',
            })
                .then(res => res.json())
                .then(res => {
                    this.setState({
                        dataSalesReport: res
                    });
                    let salesReport = this.salesReportChart.getChart();
                    salesReport.series[0].setData(this.state.dataSalesReport);
                });
        }
    };

    render() {
        let salesReportSelect = ['Year', 'Month', 'Week'];

        return (
            <div className="salesReport">
                <div className="salesReportHeader">
                    <p>Sales Report</p>
                    <div className="salesReportSelectWrap">
                        <span>Show:</span>
                        <Select data={salesReportSelect} onChange={this.onChange} />
                    </div>
                </div>
                <ReactHighcharts config={SalesReport} ref={(SalesReportChart) => {this.salesReportChart = SalesReportChart}} />
            </div>
        )
    }
}

export default SalesReportChart;