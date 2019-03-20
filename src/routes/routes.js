import React from 'react';
import {BrowserRouter, Route ,Switch} from 'react-router-dom';
import App from "../components/app";
import Hrm from "../containers/hrm/index"
import Home from '../containers/company/Info';
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
                    {/*<Route*/}
                      {/*path="/home"*/}
                      {/*component={Home}*/}
                    {/*/>*/}
                </Switch>
            </BrowserRouter>
        </div>
    )
};

export default PublicRoute;