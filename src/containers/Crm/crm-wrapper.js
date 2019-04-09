import React, { Component } from "react";
import HeaderComponent from "../../components/Header/HeaderComponent";
import Typography from "@material-ui/core/Typography";
import { withStyles } from "@material-ui/core";
import styled from "styled-components";
import { connect } from "react-redux";
import AppBar from "@material-ui/core/AppBar";
import Tabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/Tab";
import PropTypes from "prop-types";
import Crm from './Company';
import Visits from './Visits';
import Debts from './Debts';


const CompanyBackgroundComponent = styled.div`
  height: 100vh;
  width: 100%;
  background-color: inherit;
`;


const styles = theme => ({
  root: {
    flexGrow: 1,
    backgroundColor: theme.palette.background.paper,
    "& label": {
      display: "flex"
    }
  }

});



function TabContainer(props) {
  return (
    <Typography component="div" style={{ padding: 8 * 3 }}>
      {props.children}
    </Typography>
  );
}


function LinkTab(props) {
  return <Tab onClick={event => event.preventDefault()} {...props} />;
}


class CrmWrapper extends Component {
  constructor(props) {
    super(props);
    this.state = {
      value: 0,
    };
  }

  handleChange = (event, value) => {
    this.setState({ value });
  };

  render() {
    const { classes } = this.props;
    const { value } = this.state;
    return (
      <div className={classes.root}>
        <CompanyBackgroundComponent>
          <HeaderComponent/>
            <AppBar position="static" color="inherit">
              <Tabs variant="fullWidth" value={value} onChange={this.handleChange} indicatorColor="primary">
                <LinkTab label="Customer/Dealer"/>
                <LinkTab label="Visits"/>
                <LinkTab label="Debts"/>
              </Tabs>
            </AppBar>
            {value === 0 && <TabContainer><Crm /></TabContainer>}
            {value === 1 && <TabContainer><Visits /></TabContainer>}
            {value === 2 && <TabContainer><Debts /></TabContainer>}
        </CompanyBackgroundComponent>
      </div>
    );
  };
}

TabContainer.propTypes = {
  children: PropTypes.node.isRequired
};

export default connect(null, null)(withStyles(styles)(CrmWrapper));