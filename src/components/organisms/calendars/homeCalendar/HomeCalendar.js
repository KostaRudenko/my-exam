import React from 'react';
import DayPicker from 'react-day-picker';
import Helmet from 'react-helmet';
import 'react-day-picker/lib/style.css';


class HomeCalendar extends React.Component {
    render() {

        return (
            <div>
                <Helmet>
                    <style>{`
                      .DayPicker-Day--today {
                        color: #fff;
                        background: #2196f3;
                        border-radius: 100%;
                        width: 1px;
                      }
                      .DayPicker-Day {
                        color: #fff;
                      }
                      .DayPicker {
                        width: 400px;
                      }
                      .DayPicker-Month {
                        width: 100%;
                        height: 100%;
                        margin: 0;
                      }
                      .DayPicker-Caption {
                        text-align: center;
                        font-size: 24px;
                        color: #fff;
                        height: 94px;
                        padding: 0;
                        background: #3a3e52;
                        margin-bottom: 65px;
                      }
                      .DayPicker-NavButton--prev {
                        margin-right: 280px;
                      }
                      .DayPicker-NavButton--next {
                        margin-right: 47px;
                      }
                      .DayPicker-Day--outside {
                        color: #9ea3b4;
                      }
                      .DayPicker-Caption > div {
                        margin-top: 40px;
                      }
                      .DayPicker-NavButton {
                        top: 39px;
                      }
                      .DayPicker-Weekday {
                        padding-bottom: 25px;
                      }
                    `}</style>
                </Helmet>
                <DayPicker showOutsideDays />
            </div>
        )
    }
}

export default HomeCalendar;