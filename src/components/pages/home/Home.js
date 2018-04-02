import React from 'react';
import Box from '../../../components/atoms/box/Box';
import './Home.css';
import SalesReportChart from "../../organisms/charts/salesReport/SalesReportChart";
import HomeCalendar from "../../organisms/calendars/homeCalendar/HomeCalendar";
import Inbox from "../../organisms/Inbox/Inbox";

class Home extends React.Component {
    render() {
        return (
            <div className="home">
                {/*<div className="bottomBoxWrap">*/}
                    {/*<div>*/}
                        <Box>
                            <div className="salesReportWrap">
                                <SalesReportChart />
                            </div>
                        </Box>
                    {/*</div>*/}
                    {/*<div>*/}
                        <Box>
                            <HomeCalendar />
                        </Box>
                    {/*</div>*/}
                    {/*<div>*/}
                        <Box>
                            <Inbox />
                        </Box>
                    {/*</div>*/}
                {/*</div>*/}

            </div>
        )
    }
}

export default Home;