import React, {Component} from "react";
import Grid from "@material-ui/core/Grid/Grid";
import Paper from "@material-ui/core/Paper/Paper";
import Scrollbar from "../../../components/Common/Scrollbar";
import CompanyInfo from "../../Company/Info";
import { withStyles } from "@material-ui/core";




const styles = theme => ({
    root: {
        flexGrow: 1,
        backgroundColor: theme.palette.background.paper,
        "& label": {
            display: "flex"
        }
    }

});


class Vendors extends  Component{
    constructor(props) {
        super(props);
    }
    render(){
        const { classes } = this.props;
        return(
         <div className={classes.root}>
            <Grid style={{ paddingTop: 8 }} container spacing={24}>
                <Grid item xs={3} sm={3}>
                    <Paper>
                        <Scrollbar showBtn btnText={'Add Vendor'} />
                    </Paper>
                </Grid>
                <Grid item xs={9} sm={9}>
                    <Paper>
                        <CompanyInfo/>
                    </Paper>
                </Grid>
            </Grid>
         </div>
        )
    }
}
export default withStyles(styles)(Vendors);
