import React, { Component } from "react";
import { BrowserRouter, Link, Route, Switch } from "react-router-dom";
import Info from "../containers/Company/Info";
import AddCompany from "../containers/Company/AddCompany/index";
import AddList from "../containers/Company/AddCompanyList/AddList";
import styled from "styled-components";
import Paper from "@material-ui/core/Paper";
import HeaderComponents from "../components/Header/HeaderComponent";
import SingleContact from '../components/Company/Info/Single/contactSingle';
import SingleRequisite from '../components/Company/Info/Single/requisiteSingle';
import StartComponent from '../components/Company/StartComponent';
import posed, { PoseGroup } from 'react-pose';

const RouteContainer = posed.div({
  enter: { opacity: 1, delay: 350, beforeChildren: true,height:'100%' },
  exit: { opacity: 0 }
});

const CompanyBackgroundComponent = styled.div`
  height: 100vh;
  width: 100%;
  background-color: inherit;
`;
const ListContentComponent = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  max-width:100%;
  flex-wrap: wrap;
`;
const ContentList = styled.div` 
  flex: 1.5;
  margin-right: 20px;
  text-align: center;  
`;
const ContentListContainer = styled(Paper)`
      width: 100%;
`;
const ContentCompany = styled.div`
  flex: 4;
`;

const ContentCompanyContainer = styled(Paper)`
  height: 85vh;
  width: 100%;
  
`;
const ComponentsWrapper = styled.div`
  display: flex;
  width:100%;
  padding:20px;
`;

export default class App extends Component {
  render() {
    const {url} = this.props.match;
    return (
      <BrowserRouter>
        <Route
          render={({ location }) => (
            <div>
              <CompanyBackgroundComponent>
                <HeaderComponents/>
                <ListContentComponent>
                  <ComponentsWrapper>
                    <ContentList>
                      <ContentListContainer>
                        <AddList/>
                      </ContentListContainer>
                    </ContentList>
                    <ContentCompany>
                      <ContentCompanyContainer>
                      <PoseGroup>
                        <RouteContainer key={location.pathname}>
                          <Switch location={location}>
                            <Route exact path={`${url}/add-company`} component={AddCompany}/>
                            <Route exact path={`${url}`} component={StartComponent}/>
                            <Route exact path={`${url}/info`} component={Info}/>
                            <Route exact path={`${url}/info/contact/:id`} component={SingleContact}/>
                            <Route exact path={`${url}/info/requisite/:id`} component={SingleRequisite}/>
                          </Switch>
                        </RouteContainer>
                      </PoseGroup>
                      </ContentCompanyContainer>
                    </ContentCompany>
                  </ComponentsWrapper>
                </ListContentComponent>
              </CompanyBackgroundComponent>
            </div>
          )}/>
      </BrowserRouter>
    );
  }
}


