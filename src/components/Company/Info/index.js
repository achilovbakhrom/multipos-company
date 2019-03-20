import React,{Component} from 'react';
import AppBar from "@material-ui/core/AppBar";
import Tabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/Tab";
import Typography from "@material-ui/core/Typography";
import PropTypes from "prop-types";
import IconEdit from "@material-ui/icons/Edit";
import IconDelete from "@material-ui/icons/Delete";
import Paper from "@material-ui/core/Paper";
import Button from "@material-ui/core/Button";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { connect } from "react-redux";
import { withStyles } from "@material-ui/core";
import ContactInfo from './CompanyInfo';
import ContactPersons from './ContactPersons';
import BankRequisites from './BankRequisites';
function TabContainer(props) {
  return (
    <Typography component="div" style={{ padding: 8 * 3 }}>
      {props.children}
    </Typography>
  );
}

const ContentSubmitButton = styled(Paper)`
    width: 100%;
    height: 50px;
    
`;

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
const topTabStyles = {
    display:'flex',
    alignItems:'center',
    borderRadius:0,
};
const flexItem = {
  display: 'flex',
  width:'100%',
  padding: '0 20px',
  justifyContent:'space-between',
};

class Index extends Component{
  constructor(props){
    super(props);
    this.state={
      value:1,
    };
    this.handleChange = this.handleChange.bind(this);
  }
  handleChange = (event, value) => {
    this.setState({ value });
  };
  render(){
    const { value } = this.state;
    const { classes } = this.props;
    return(
      <div className={classes.root}>
        <ContentSubmitButton style = {topTabStyles}>
          <div style={flexItem}>
          <Typography variant={"h5"} style={{fontWeight:'bold'}}>
            Company title
          </Typography>
          <div className={'btns-wrapper'}>
            <Button
              type="button"
              style={{ marginLeft: "90" }}>
              <IconEdit style={{ color: "#4086f4" }}/>
            </Button>
            <Button
              type="button"
              style={{ marginLeft: "90" }}>
              <IconDelete style={{ color: "#d12212" }}/>
            </Button>
          </div>
          </div>
        </ContentSubmitButton>
        <AppBar position="static" color="inherit">
          <Tabs variant="fullWidth" value={value} onChange={this.handleChange} indicatorColor="primary">
            <LinkTab label="Company"/>
            <LinkTab label="Contact Person"/>
            <LinkTab label="Bank Requisites"/>
          </Tabs>
        </AppBar>
        {value === 0 && <TabContainer><ContactInfo /></TabContainer>}
        {value === 1 && <TabContainer><ContactPersons /></TabContainer>}
        {value === 2 && <TabContainer><BankRequisites /></TabContainer>}
      </div>
    );
  }
}
Index.propTypes = {
  classes: PropTypes.object.isRequired
};

export default connect(null,null)(withStyles(styles)(Index));