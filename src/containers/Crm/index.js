import React, { Component } from "react";
import HeaderComponent from "../../components/Header/HeaderComponent";
import Typography from "@material-ui/core/Typography";
import { withStyles } from "@material-ui/core";
import styled from "styled-components";
import { connect } from "react-redux";
import Grid from "@material-ui/core/Grid";
import Paper from "@material-ui/core/Paper";
import CrmScrollbar from "../Crm/crm-scrollbar";
import Button from "@material-ui/core/Button";
import IconDone from "@material-ui/icons/Done";
import IconCancel from "@material-ui/icons/Close";
import { FormValidation } from "calidation";
import { config } from "./validation/crm-validation";
import CrmCompany from "../../components/Crm/company";
import AppBar from "@material-ui/core/AppBar";
import Tabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/Tab";
import PropTypes from "prop-types";
import ContactPersons from '../../components/Company/Info/ContactPersons';

const CompanyBackgroundComponent = styled.div`
  height: 100vh;
  width: 100%;
  background-color: inherit;
 
`;

const ContentSubmitButton = styled(Paper)`
    width: 100%;
    height: 50px;
`;
const ComponentsWrapper = styled.div`
  display: flex;
  width:100%;
  padding:20px;
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


const topTabStyles = {
  display: "flex",
  alignItems: "center",
  borderRadius: 0
};
const flexItem = {
  display: "flex",
  width: "100%",
  padding: "0 20px",
  justifyContent: "space-between"
};


function TabContainer(props) {
  return (
    <Typography component="div" style={{ padding: 8 * 3 }}>
      {props.children}
    </Typography>
  );
}

TabContainer.propTypes = {
  children: PropTypes.node.isRequired
};

function LinkTab(props) {
  return <Tab onClick={event => event.preventDefault()} {...props} />;
}


class Crm extends Component {

  constructor(props) {
    super(props);
    this.state = {
      value: 0
    };
  }

  handleChange = (event, value) => {
    this.setState({ value });
  };

  onSubmit = ({ fields, errors, isValid }) => {
    // if (isValid && this.state.country && this.state.city && this.state.employee_image) {
    //
    //   console.log("Everything is good:", fields);
    // } else {
    //
    //   console.log("Something is wrong:", errors);
    // }
  };


  render() {
    const { classes } = this.props;
    const {value} = this.state;
    return (
      <div className={classes.root}>
        <CompanyBackgroundComponent>
          <HeaderComponent/>
          <ComponentsWrapper>
            <Grid style={{ paddingTop: 8 }} container spacing={24}>
              <Grid item xs={3} sm={3}>
                <Paper style={{ height: "100vh" }}>
                  <CrmScrollbar/>
                </Paper>
              </Grid>
              <Grid item xs={9} sm={9}>
                <Paper style={{ height: "100vh" }}>
                  <FormValidation onSubmit={this.onSubmit} config={config}>
                    {({ fields, errors, submitted }) => (
                      <>
                        <ContentSubmitButton style={topTabStyles}>
                          <div style={flexItem}>
                            <Typography variant={"h5"} style={{ fontWeight: "bold" }}>
                              Customer / Dealer
                            </Typography>
                            <div className={"btns-wrapper"}>
                              <Button
                                type="submit"
                                style={{ marginLeft: "90" }}>
                                <IconDone style={{ color: "#79e07c" }}/>
                              </Button>
                              <Button
                                type="button"
                                style={{ marginLeft: "90" }}>
                                <IconCancel style={{ color: "#4086f4" }}/>
                              </Button>
                            </div>
                          </div>
                        </ContentSubmitButton>
                        <AppBar position="static" color="inherit">
                          <Tabs variant="fullWidth" value={value} onChange={this.handleChange} indicatorColor="primary">
                            <LinkTab label="Company"/>
                            <LinkTab label="Contact Person"/>
                            <LinkTab label="Company Details"/>
                          </Tabs>
                        </AppBar>
                        {value === 0 && <TabContainer><CrmCompany fields={fields} errors={errors} submitted={submitted}/></TabContainer>}
                        {value === 1 && <TabContainer><ContactPersons /></TabContainer>}
                        {value === 2 && <TabContainer>3</TabContainer>}
                      </>
                    )}
                  </FormValidation>
                </Paper>
              </Grid>
            </Grid>
          </ComponentsWrapper>
        </CompanyBackgroundComponent>
      </div>
    );
  }
}

function mapStateToProps(state) {
  // return{
  //   addedEmployee:state.addedEmployee,
  // }
}


export default connect(null, null)(withStyles(styles)(Crm));