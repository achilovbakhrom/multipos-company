import React, { Component } from "react";
import Logo from "../../resourse/media/company.svg";
import { Link } from "react-router-dom";
import { withStyles } from "@material-ui/core";
import AddCompanyButton from "../Button/AddCompanyButton";


const styles = theme => ({
  start_component: {
    display: "flex",
    width: "100%",
    height: "100%",
    justifyContent: "center"
  },
  inner_item: {
    display: "flex",
    flexDirection:'column',
    justifyContent:'center',
    height: "100%"
  }
});


class StartComponent extends Component {
  render() {
    const { classes } = this.props;
    return (
      <div className={classes.start_component}>
        <div className={classes.inner_item}>
          <div className="text-center">
            <Logo/>
          </div>
          <p>
            Add or select a company to view information.
          </p>
          <Link to='/company/add-company' style={{ textDecoration: "none" }}>
            <AddCompanyButton/>
          </Link>
        </div>
      </div>
    );
  }
}

export default withStyles(styles)(StartComponent);