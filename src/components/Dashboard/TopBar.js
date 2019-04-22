import React,{Component} from 'react';
import { withStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import FormControl from "@material-ui/core/FormControl";
import Select from "@material-ui/core/Select";
import BootstrapInput from "../Common/BootstrapInput";
import MenuItem from "@material-ui/core/MenuItem";
import Paper from "@material-ui/core/Paper";

const styles = theme => ({
  root: {
    display: "flex",
    flexWrap: "wrap",
    width: "100%"
  },
  formControl: {
    marginTop:0,
    minWidth: 120,
    flex:'0 0 50%',
  },
  selectEmpty: {
    marginTop: 0,
    height:'100%',
    "& div":{
      boxShadow:"none",
    }
  },
  heading_wrap: {
    padding: "15px"
  },
  selects_wrapper:{
    display:'flex',
    flexWrap:'wrap',
    height:'100%',
    alignItems:"center",
    paddingRight:'10px',
  },
});

class TopBar extends Component{
  constructor(props) {
    super(props);
    this.state = {
      store: "",
      currency:"",
    };
  }

  handleChange = event => {
    this.setState({ [event.target.name]: event.target.value });
  };
  render(){
    const {classes} = this.props;
    return(
      <Paper className={classes.root}>
        <Grid container spacing={24}>
          <Grid item md={8}>
            <div className={classes.heading_wrap}>
              <Typography variant={"h5"}>
                Company
              </Typography>
            </div>
          </Grid>
          <Grid item md={4}>
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
          </Grid>
        </Grid>
      </Paper>
    );
  }
}
export default withStyles(styles)(TopBar);