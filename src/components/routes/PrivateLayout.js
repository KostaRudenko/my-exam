import React from 'react';
import { Route, Redirect } from 'react-router-dom';
import TopBar from "../organisms/topBar/TopBar";
import LeftBar from "../organisms/leftBar/LeftBar";
import '../../App.css';


const PrivateLayout = ({component: Component, ...rest}) => {
    return (
        <Route {...rest} render={matchProps => {
            if (localStorage.getItem('user') === 'exist') {
                return(
                    <div>
                        <TopBar />
                        <LeftBar />
                        <div className="leftBar-mainContent-wrap">
                            <div className="mainContent">
                                <Component {...matchProps} />
                            </div>
                        </div>
                    </div>
                );
            } else {
                return <Redirect to="/authentication" />
            }
        }} />
    );
};

export default PrivateLayout;