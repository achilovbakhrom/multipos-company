import React, { Component } from "react";
import { connect } from "react-redux";
import styled from "styled-components";
import HeaderComponent from "../../components/Header/HeaderComponent";
import { Sparklines, SparklinesLine, SparklinesSpots } from "react-sparklines";
import TopBar from '../../components/Dashboard/TopBar';
import DaysFilter from '../../components/Dashboard/DaysFilter';
import Chart from '../../components/Dashboard/Chart';

const CompanyBackgroundComponent = styled.div`
  height: 100vh;
  width: 100%;
  background-color: inherit;
`;

const ComponentsWrapper = styled.div`
  width:100%;
  padding:20px;
`;

class Dashboard extends Component {
  render() {
    return (
      <CompanyBackgroundComponent>
        <HeaderComponent/>
        <ComponentsWrapper>
          <TopBar/>
          <DaysFilter />
          <Chart/>
        </ComponentsWrapper>
      </CompanyBackgroundComponent>
    );
  }
}

export default connect(null, null)(Dashboard);
