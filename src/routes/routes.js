import React from 'react';
import {BrowserRouter, Route ,Switch} from 'react-router-dom';
import App from "../components/app";
import Hrm from "../containers/hrm/index"
import Home from '../components/Company/Info';
import adminPanel from '../containers/AdminPanel/AdminPanel';
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
                    <Route 
                        path="/admin-panel"
                        component={adminPanel}
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