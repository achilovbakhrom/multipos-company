import React, { Component } from "react";
import { BrowserRouter, Link, Route, Switch } from "react-router-dom";
import Home from "./Home";
import Company from "../containers/company/index";
import AddCompany from "../containers/company/AddCompany/index";
import AddList from "../containers/company/AddCompanyList/AddList";
import styled from "styled-components";
import Paper from "@material-ui/core/Paper";
import HeaderComponents from "../components/Header/HeaderComponent";
import AddCompanyButton from "../components/Button/AddCompanyButton";

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
const CenteredDiv = styled.div`
  display: flex;
  width:100%;
  height:100%;
  align-items:stretch;
  justify-content:center;
`;
export default class App extends Component {
  render() {
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
                        <Switch location={location}>
                          <Route exact path={"/company/add-company"} component={AddCompany}/>
                          <Route exact path={"/company"} component={Component1}/>
                          <Route exact path={"/"} component={Home}/>
                        </Switch>
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
const Component1 = () => (
    <CenteredDiv>
      <div style={{alignSelf:'center'}}>
        <p>
          Add or select a company to view information.
        </p>
        <Link to='/company/add-company' style={{ textDecoration: "none" }}>
          <AddCompanyButton/>
        </Link>
      </div>
    </CenteredDiv>
);
