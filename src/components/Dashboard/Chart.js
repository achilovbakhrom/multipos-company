import React, { Component } from "react";
import { withStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import ChartItem from "./Charts/ChartItem";

const styles = theme =>({
  root:{
    marginTop:'20px',
  }
});


class Chart extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    const {classes} = this.props;
    return (
      <Grid container className={classes.root} spacing={24}>
        <Grid item md={4}>
          <ChartItem/>
        </Grid>
        <Grid item md={4}>
          <ChartItem/>
        </Grid>
        <Grid item md={4}>
          <ChartItem/>
        </Grid>
      </Grid>
    );
  }
}

export default withStyles(styles)(Chart);