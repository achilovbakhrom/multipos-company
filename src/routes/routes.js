import React from 'react';
import {BrowserRouter, Route ,Switch} from 'react-router-dom';
import App from "../components/app";
import Hrm from "../containers/hrm/index"
import AdminPanel from '../containers/AdminPanel/AdminPanel';
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
                      component={AdminPanel}
                    />
                </Switch>
            </BrowserRouter>
        </div>
    )
};

export default PublicRoute;