import React from 'react';
import Select from "../../../atoms/select/Select";
import ReactHighcharts from 'react-highcharts';

import './RaportChart.css';

//config chart
import RaportChartConfig from '../../../../config/RaportChart.config';
import RaportViewsChart from '../../../../config/RaportViewsChart.config';
import RaportVisitorsChart from '../../../../config/RaportVisitorsChart.config';
import RaportImpressionsChart from '../../../../config/RaportImpressionsChart.config';

class RaportChart extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            RaportChartData: [],
        }
    }

    componentWillMount() {
        fetch('/api/user/chart/raport/last-year', {
            headers: {
                'Accept': 'application/json',
                'Content-type': 'application/json'
            },
            method: 'get',
        })
            .then(res => res.json())
            .then(res => {
                this.setState({
                    RaportChartData: res
                });
                let raportData = this.raportChart.getChart();
                raportData.series[0].setData(this.state.RaportChartData);
            });
        fetch('/api/user/chart/raport-views/last-year', {
            headers: {
                'Accept': 'application/json',
                'Content-type': 'application/json'
            },
            method: 'get'
        })
            .then(res => res.json())
            .then(res => {
                let raportViewsData = this.raportViewsChart.getChart();
                raportViewsData.series[0].setData(res.data);
                raportViewsData.setTitle({
                    text: res.percent
                })
            });
        fetch('/api/user/chart/raport-visitors/last-year', {
            headers: {
                'Accept': 'application/json',
                'Content-type': 'application/json'
            },
            method: 'get'
        })
            .then(res => res.json())
            .then(res => {
                let raportVisitorsData = this.raportVisitorsChart.getChart();
                raportVisitorsData.series[0].setData(res.data);
                raportVisitorsData.setTitle({
                    text: res.percent
                })
            });
        fetch('/api/user/chart/raport-impressions/last-year', {
            headers: {
                'Accept': 'application/json',
                'Content-type': 'application/json'
            },
            method: 'get'
        })
            .then(res => res.json())
            .then(res => {
                let raportImpressionsData = this.raportImpressionsChart.getChart();
                raportImpressionsData.series[0].setData(res.data);
                raportImpressionsData.setTitle({
                    text: res.percent
                })
            });
    }

    onChange = (e) => {
        let period = (e.target.value);

        if (period === 'Year') {
            fetch('/api/user/chart/raport/last-year', {
                headers: {
                    'Accept': 'application/json',
                    'Content-type': 'application/json'
                },
                method: 'get',
            })
                .then(res => res.json())
                .then(res => {
                    this.setState({
                        RaportChartData: res
                    });
                    let raportData = this.raportChart.getChart();
                    raportData.series[0].setData(this.state.RaportChartData);
                });
            fetch('/api/user/chart/raport-views/last-year', {
                headers: {
                    'Accept': 'application/json',
                    'Content-type': 'application/json'
                },
                method: 'get'
            })
                .then(res => res.json())
                .then(res => {
                    let raportViewsData = this.raportViewsChart.getChart();
                    raportViewsData.series[0].setData(res.data);
                    raportViewsData.setTitle({
                        text: res.percent
                    })
                });
            fetch('/api/user/chart/raport-visitors/last-year', {
                headers: {
                    'Accept': 'application/json',
                    'Content-type': 'application/json'
                },
                method: 'get'
            })
                .then(res => res.json())
                .then(res => {
                    let raportVisitorsData = this.raportVisitorsChart.getChart();
                    raportVisitorsData.series[0].setData(res.data);
                    raportVisitorsData.setTitle({
                        text: res.percent
                    })
                });
            fetch('/api/user/chart/raport-impressions/last-year', {
                headers: {
                    'Accept': 'application/json',
                    'Content-type': 'application/json'
                },
                method: 'get'
            })
                .then(res => res.json())
                .then(res => {
                    let raportImpressionsData = this.raportImpressionsChart.getChart();
                    raportImpressionsData.series[0].setData(res.data);
                    raportImpressionsData.setTitle({
                        text: res.percent
                    })
                });
        }
        if (period === 'Month') {
            fetch('/api/user/chart/raport/last-month', {
                headers: {
                    'Accept': 'application/json',
                    'Content-type': 'application/json'
                },
                method: 'get',
            })
                .then(res => res.json())
                .then(res => {
                    this.setState({
                        RaportChartData: res
                    });
                    let raportData = this.raportChart.getChart();
                    raportData.series[0].setData(this.state.RaportChartData);
                });
            fetch('/api/user/chart/raport-views/last-month', {
                headers: {
                    'Accept': 'application/json',
                    'Content-type': 'application/json'
                },
                method: 'get'
            })
                .then(res => res.json())
                .then(res => {
                    let raportViewsData = this.raportViewsChart.getChart();
                    raportViewsData.series[0].setData(res.data);
                    raportViewsData.setTitle({
                        text: res.percent
                    })
                });
            fetch('/api/user/chart/raport-visitors/last-month', {
                headers: {
                    'Accept': 'application/json',
                    'Content-type': 'application/json'
                },
                method: 'get'
            })
                .then(res => res.json())
                .then(res => {
                    let raportVisitorsData = this.raportVisitorsChart.getChart();
                    raportVisitorsData.series[0].setData(res.data);
                    raportVisitorsData.setTitle({
                        text: res.percent
                    })
                });
            fetch('/api/user/chart/raport-impressions/last-month', {
                headers: {
                    'Accept': 'application/json',
                    'Content-type': 'application/json'
                },
                method: 'get'
            })
                .then(res => res.json())
                .then(res => {
                    let raportImpressionsData = this.raportImpressionsChart.getChart();
                    raportImpressionsData.series[0].setData(res.data);
                    raportImpressionsData.setTitle({
                        text: res.percent
                    })
                });
        }
        if (period === 'Week') {
            fetch('/api/user/chart/raport/last-week', {
                headers: {
                    'Accept': 'application/json',
                    'Content-type': 'application/json'
                },
                method: 'get',
            })
                .then(res => res.json())
                .then(res => {
                    this.setState({
                        RaportChartData: res
                    });
                    let raportData = this.raportChart.getChart();
                    raportData.series[0].setData(this.state.RaportChartData);
                });
            fetch('/api/user/chart/raport-views/last-week', {
                headers: {
                    'Accept': 'application/json',
                    'Content-type': 'application/json'
                },
                method: 'get'
            })
                .then(res => res.json())
                .then(res => {
                    let raportViewsData = this.raportViewsChart.getChart();
                    raportViewsData.series[0].setData(res.data);
                    raportViewsData.setTitle({
                        text: res.percent
                    })
                });
            fetch('/api/user/chart/raport-visitors/last-week', {
                headers: {
                    'Accept': 'application/json',
                    'Content-type': 'application/json'
                },
                method: 'get'
            })
                .then(res => res.json())
                .then(res => {
                    let raportVisitorsData = this.raportVisitorsChart.getChart();
                    raportVisitorsData.series[0].setData(res.data);
                    raportVisitorsData.setTitle({
                        text: res.percent
                    })
                });
            fetch('/api/user/chart/raport-impressions/last-week', {
                headers: {
                    'Accept': 'application/json',
                    'Content-type': 'application/json'
                },
                method: 'get'
            })
                .then(res => res.json())
                .then(res => {
                    let raportImpressionsData = this.raportImpressionsChart.getChart();
                    raportImpressionsData.series[0].setData(res.data);
                    raportImpressionsData.setTitle({
                        text: res.percent
                    })
                });
        }
    };

    render() {
        let salesReportSelect = ['Year', 'Month', 'Week'];

        return (
            <div>
                <div className="raportHeader">
                    <div className="raportChartsWrap">
                        <div className="raportViewsChartWrap">
                            <div>
                                <ReactHighcharts
                                    config={RaportViewsChart}
                                    ref={(raportViewsChart) => {this.raportViewsChart = raportViewsChart}}
                                />
                            </div>
                           <div>
                               <p>1300</p>
                               <span>Views</span>
                           </div>
                        </div>
                        <div className="raportVisitorsChartWrap">
                            <div>
                                <ReactHighcharts
                                    config={RaportVisitorsChart}
                                    ref={(raportVisitorsChart) => {this.raportVisitorsChart = raportVisitorsChart}}
                                />
                            </div>
                            <div>
                                <p>800</p>
                                <span>Visitors</span>
                            </div>
                        </div>
                        <div className="raportImpressionsChartWrap">
                            <div>
                                <ReactHighcharts
                                    config={RaportImpressionsChart}
                                    ref={(raportImpressionsChart) => {this.raportImpressionsChart = raportImpressionsChart}}
                                />
                            </div>
                            <div>
                                <p>3800</p>
                                <span>Impressions</span>
                            </div>
                        </div>
                    </div>
                    <div className="raportSelectWrap">
                        <span>Show:</span>
                        <Select data={salesReportSelect} onChange={this.onChange} />
                    </div>
                </div>
                <ReactHighcharts
                    config={RaportChartConfig}
                    ref={(RaportChart) => {this.raportChart = RaportChart}}
                />
            </div>
        )
    }
}

export default RaportChart;