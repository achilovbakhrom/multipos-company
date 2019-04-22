import React, { Component } from "react";
import { withStyles } from "@material-ui/core/styles/index";
import Grid from "@material-ui/core/Grid/index";
import ChartItem from "./Charts/ChartItem";

const styles = theme =>({
  root:{
    marginTop:'20px',
  }
});


class LargeChart extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    const {classes} = this.props;
    return (
      <Grid container className={classes.root} spacing={24}>
        <Grid item md={9}>
          <ChartItem color={styles.theme.palette.success}/>
        </Grid>
        <Grid item md={3}>

        </Grid>
      </Grid>
    );
  }
}

export default withStyles(styles)(LargeChart);