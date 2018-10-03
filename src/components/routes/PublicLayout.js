import React from 'react';
import { Route, Redirect } from 'react-router-dom';

const PublicLayout = ({component: Component, ...rest}) => {
    return (
        <Route {...rest} render={() => {
            if(localStorage.getItem('user') === 'exist') {
                return(
                    <Redirect to="/" />
                );
            } else {
                return <Component />
            }
        }} />
    );
};

export default PublicLayout;