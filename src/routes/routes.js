import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import App from "../components/app";
import Hrm from "../containers/Hrm/index";
import Crm from "../containers/Crm/index";
import Warehouse from '../containers/warehouse/index'
import AdminPanel from "../containers/AdminPanel/AdminPanel";
import posed, { PoseGroup } from "react-pose";

const RouteContainer = posed.div({
  enter: { opacity: 1, delay: 350, beforeChildren: true },
  exit: { opacity: 0 }
});

const PublicRoute = () => {
  return (
    <div>
      <BrowserRouter>
        <Route
          render={({ location }) => (
            <PoseGroup>
              <RouteContainer key={location.pathname}>
                <Switch location={location}>
                  <Route
                    path="/company"
                    component={App}
                  />
                  <Route
                    path="/hrm"
                    component={Hrm}
                  />
                  <Route
                    path="/crm"
                    component={Crm}
                  />
                  <Route
                    path="/admin-panel"
                    component={AdminPanel}
                  />
                  <Route 
                    path="/warehouse"
                    component={Warehouse}
                  />
                </Switch>
              </RouteContainer>
            </PoseGroup>
          )}/>
      </BrowserRouter>
    </div>
  );
};

export default PublicRoute;