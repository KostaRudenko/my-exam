import React from 'react';
import { Route, Redirect } from 'react-router-dom';

const PrivateLayout = ({component: Component, ...rest}) => {
    return (
        <Route {...rest} render={matchProps => {
            if (localStorage.getItem('user') === 'exist') {
                return(
                    <div>
                        <div className="mainCont">
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