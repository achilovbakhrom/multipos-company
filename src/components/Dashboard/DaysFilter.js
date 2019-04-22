import React, { Component } from "react";
import { withStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import FormControl from "@material-ui/core/FormControl";
import Select from "@material-ui/core/Select";
import BootstrapInput from "../Common/BootstrapInput";
import MenuItem from "@material-ui/core/MenuItem";
import Paper from "@material-ui/core/Paper";
import Button from "@material-ui/core/Button";
import { rgbToColorString } from "polished/lib/index";

const styles = theme => ({
  root: {
    display: "flex",
    flexWrap: "wrap",
    width: "100%",
    marginTop: "30px"
  },
  formControl: {
    marginTop: 0,
    minWidth: 120,
    flex: "0 0 50%"
  },
  selectEmpty: {
    marginTop: 0,
    height: "100%",
    "& div": {
      boxShadow: "none"
    }
  },
  heading_wrap: {
    padding: "15px"
  },
  selects_wrapper: {
    display: "flex",
    flexWrap: "wrap",
    width: "100%",
    alignItems: "center",
  },
  btns_wrapper:{
    display:'flex',
    flexWrap:'wrap',
    width:'100%',
  },
  button:{
    backgroundColor:'#fff',
    paddingTop:'12px',
    paddingBottom:'13px',
    borderRadius:'4px',
    boxShadow:'0px 1px 3px -1px ' + rgbToColorString({ red: 0, green: 0, blue: 0, alpha: 0.5 }),
    flexGrow:1,
    flexBasis:0,
    '&:hover':{
      backgroundColor:theme.palette.primary.main,
      color:'#fff',
    }
  }
});


class Filter extends Component {
  constructor(props) {
    super(props);
    this.state = {
      store: "",
      currency: ""
    };
  }

  handleChange = event => {
    this.setState({ [event.target.name]: event.target.value });
  };

  render() {
    const { classes } = this.props;
    return (

      <Grid container spacing={24}>
        <Grid item md={4}>
          <Paper className={classes.root}>
            <div className={classes.selects_wrapper}>
              <FormControl className={classes.formControl}>
                <Select
                  value={this.state.store}
                  onChange={this.handleChange}
                  displayEmpty
                  className={classes.selectEmpty}
                  input={<BootstrapInput name={"store"} value={this.state.store}/>}
                >
                  <MenuItem value="">
                    <em>None</em>
                  </MenuItem>
                  <MenuItem value={10}>Ten</MenuItem>
                  <MenuItem value={20}>Twenty</MenuItem>
                  <MenuItem value={30}>Thirty</MenuItem>
                </Select>
              </FormControl>
              <FormControl className={classes.formControl}>
                <Select
                  value={this.state.currency}
                  onChange={this.handleChange}
                  displayEmpty
                  className={classes.selectEmpty}
                  input={<BootstrapInput name={"currency"} value={this.state.currency}/>}
                >
                  <MenuItem value="">
                    <em>None</em>
                  </MenuItem>
                  <MenuItem value={10}>Ten</MenuItem>
                  <MenuItem value={20}>Twenty</MenuItem>
                  <MenuItem value={30}>Thirty</MenuItem>
                </Select>
              </FormControl>
            </div>
          </Paper>
        </Grid>
        <Grid item md={4}>
        </Grid>
        <Grid item md={4}>
            <Paper className={classes.root}>
              <div className={classes.btns_wrapper}>
                <Button variant="contained" className={classes.button}>
                  Pay In
                </Button>
                <Button variant="contained" className={classes.button}>
                  Pay Out
                </Button>
                <Button variant="contained" className={classes.button}>
                  Bank Drop
                </Button>
              </div>
            </Paper>
        </Grid>
      </Grid>
    );
  }
}

export default withStyles(styles)(Filter);