import React, {Component} from "react";
import HeaderComponent from "../../components/Header/HeaderComponent";
import styled from "styled-components";
import { withStyles } from "@material-ui/core";
import Tabs from "@material-ui/core/Tabs";
import AppBar from "@material-ui/core/AppBar";
import Typography from "@material-ui/core/Typography";
import Tab from "@material-ui/core/Tab";
import Vendors from "../Management/Vendors/index";
import Pricing from "../Management/Pricing/index";
import Invoices from "../Management/Invoices/index";
import Payments from "../Management/Payments/index";
import PropTypes from "prop-types";


const CompanyBackgroundComponent = styled.div`
  height: 100vh;
  width: 100%;
  background-color: inherit;
 
`;


const styles = theme => ({
    root: {
        flexGrow: 1,
        backgroundColor: theme.palette.background.paper

    },
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



class Management extends Component{
    constructor(props) {
        super(props);
        this.state = {
            value: 0,
        };
    }
    handleChange = (event, value) => {
        this.setState({ value });
    };
    render(){
        const { classes } = this.props;
        const { value } = this.state;
        return(
            <div className={classes.root}>
                <CompanyBackgroundComponent>
                    <HeaderComponent/>
                    <AppBar position="static" color="inherit">
                        <Tabs variant="fullWidth" value={value} onChange={this.handleChange} indicatorColor="primary">
                            <LinkTab label="Vendors"/>
                            <LinkTab label="Pricing"/>
                            <LinkTab label="Invoices"/>
                            <LinkTab label="Payments"/>
                        </Tabs>
                    </AppBar>
                {value === 0 && <TabContainer><Vendors /></TabContainer>}
                {value === 1 && <TabContainer><Pricing /></TabContainer>}
                {value === 2 && <TabContainer><Invoices /></TabContainer>}
                {value === 3 && <TabContainer><Payments/></TabContainer>}
                </CompanyBackgroundComponent>
            </div>
        )
    }
}
TabContainer.propTypes = {
    children: PropTypes.node.isRequired
};
export default withStyles(styles)(Management);