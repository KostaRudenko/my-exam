import React from 'react';
import { Route, Redirect } from 'react-router-dom';
import TopBar from "../organisms/topBar/TopBar";

const PrivateLayout = ({component: Component, ...rest}) => {
    return (
        <Route {...rest} render={matchProps => {
            if (localStorage.getItem('user') === 'exist') {
                return(
                    <div>
                        <TopBar/>
                        <div className="mainContent">
                            <Component {...matchProps} />
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