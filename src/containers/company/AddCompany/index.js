import React,{Component} from 'react';
import {connect} from 'react-redux';
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Tabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/Tab";
import Typography from "@material-ui/core/Typography";
import IconDone from "@material-ui/icons/Done";
import Paper from "@material-ui/core/Paper";
import Button from "@material-ui/core/Button";
import IconCancel from "@material-ui/icons/Close";
import styled from "styled-components";
import { FormValidation } from "calidation";
import { config } from "./validation/add-validation";
import {addCompany} from '../../../actions/addCompany';
import AboutCompany from "../../../components/Company/About";
import AddressCompany from "../../../components/Company/Address";
import BankRequisite from "../../../components/Company/BankRequisite";
import ContactPerson from "../../../components/Company/ContactPerson";
import {Link} from 'react-router-dom';

const ContentSubmitButton = styled(Paper)`
    width: 100%;
    height: 50px;
`;

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

const styles = theme => ({
  root: {
    flexGrow: 1,
    backgroundColor: theme.palette.background.paper
  }
});


class TabComponent extends Component {
  constructor(props) {
    super(props);
    this.state = {
      value: 0,
      company:{
        address_information:{
        }
      },
      company_contact_persons:[
        {
          gender:1,
        },
      ],
      requisites:[

      ],
    };
    this.handleContentChange = this.handleContentChange.bind(this);
  }

  onSubmit = ({ fields, errors, isValid }) => {
    // if (isValid && this.state.country && this.state.city && this.state.about_image && this.state.contact_image) {
    //   // This is where we'd handle our submission...
    //   // `fields` is an object, { field: value }
    //   console.log("Everything is good:", fields);
    // } else {
    //   // `errors` is also an object!
    //   console.log("Something is wrong:", errors);
    // }

    this.props.addCompany(this.state);

  };

  handleContentChange(data) {
    console.log(data);
    let cm_data = data.company ? data.company : data;
    if(data.company){
      this.setState((prevState)=>({
        company:{
          ...prevState.company,
          ...cm_data,
        },
      }));
    }else{
      this.setState((prevState)=>({
          ...prevState,
          ...cm_data,
      }));
    }
  }

  handleChange = (event, value) => {
    this.setState({ value });
  };

  render() {
    const { classes } = this.props;
    const { value } = this.state;
    console.log(this.state);
    return (
      <FormValidation onSubmit={this.onSubmit} config={config}>
        {({ fields, errors, submitted }) => (
          <div className={classes.root}>
            <ContentSubmitButton>
              <Button
                type="submit"
                style={{ marginLeft: "80%" }}>
                <IconDone style={{ color: "#79e07c" }}/>
              </Button>
              <Button
                type="button"
                style={{ marginLeft: "90",marginTop:'10px' }}>
                <Link to={'/company'}>
                  <IconCancel style={{ color: "#4086f4" }}/>
                </Link>
              </Button>
            </ContentSubmitButton>
            <AppBar position="static" color="inherit">
              <Tabs variant="fullWidth" value={value} onChange={this.handleChange} indicatorColor="primary">
                <LinkTab label="About"/>
                <LinkTab label="Address"/>
                <LinkTab label="Contact Person"/>
                <LinkTab label="Bank Requisite"/>
              </Tabs>
            </AppBar>
            {value === 0 && <TabContainer><AboutCompany onChange={this.handleContentChange} fields={fields} errors={errors} submitted={submitted} aboutPreview = {this.state.company.aboutPreview} file={this.state.company.about_image}/></TabContainer>}
            {value === 1 && <TabContainer><AddressCompany onChange={this.handleContentChange} fields={fields} errors={errors} submitted={submitted} country={this.state.company.address_information.country} city={this.state.company.address_information.city} /></TabContainer>}
            {value === 2 && <TabContainer><ContactPerson onChange={this.handleContentChange} fields={fields} errors={errors} submitted={submitted} contactPreview = {this.state.company_contact_persons.contactPreview} file={this.state.company_contact_persons.contact_image}/></TabContainer>}
            {value === 3 && <TabContainer><BankRequisite onChange={this.handleContentChange} fields={fields} errors={errors} submitted={submitted}/></TabContainer>}
          </div>
        )}
      </FormValidation>
    );
  }
}

TabComponent.propTypes = {
  classes: PropTypes.object.isRequired
};

function mapStateToProps(state){
  return{
    addedCompany: state.addedCompany,
  };
}



export default connect(mapStateToProps,{addCompany})(withStyles(styles)(TabComponent));

