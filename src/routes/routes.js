import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import App from "../components/app";
import Hrm from "../containers/Hrm/index";
import CrmWrapper from '../containers/Crm/crm-wrapper';
import AdminPanel from "../containers/AdminPanel/AdminPanel";
import Cash from '../containers/Cash';
import Store from '../containers/Store';
// import Warehouse from '../containers/warehouse';
import Dashboard from '../containers/Dashboard';
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
                    component={CrmWrapper}
                  />
                  <Route
                    path="/cash"
                    component={Cash}
                  />
                  <Route
                    path="/admin-panel"
                    component={AdminPanel}
                    exact
                  />
                  <Route
                    path="/store"
                    component={Store}
                  />
                  {/*<Route*/}
                  {/*path={'/warehouse'}*/}
                  {/*component={Warehouse}*/}
                  {/*/>*/}
                  <Route
                  path={'/dashboard'}
                  component={Dashboard}
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