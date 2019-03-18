import React from 'react';
import {BrowserRouter, Route, Redirect ,Switch} from 'react-router-dom';
import App from "../components/app";
import Hrm from "../containers/hrm/index"

const PublicRoute = ()=>{
    return(
        <div>
            <BrowserRouter>
                <Switch>
                    <Route
                        path="/company"
                        component={App}
                    />
                    <Route
                        path="/hrm"
                        component={Hrm}
                    />
                </Switch>
            </BrowserRouter>
        </div>
    )
};

export default PublicRoute;