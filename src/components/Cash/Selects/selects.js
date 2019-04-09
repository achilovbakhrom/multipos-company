import React,{Component} from 'react';
import { withStyles } from '@material-ui/core/styles/index';
import MenuItem from '@material-ui/core/MenuItem/index';
import FormControl from '@material-ui/core/FormControl/index';
import Select from '@material-ui/core/Select/index';
import BootstrapInput from '../../Common/BootstrapInput';

const styles = theme => ({
  root: {
    display: 'flex',
    flexWrap: 'wrap',
  },
  formControl: {
    flexGrow:1,
    flexBasis:0,
  },
});


class CashSelects extends Component{
  constructor(props){
    super(props);
    this.state = {
      type:'',
      user:'',
      which:'',
    }
  }

  handleChange = event => {
    console.log(event.target.name);
    this.setState({ [event.target.name]: event.target.value });
  };

  render(){
    const {classes} = this.props;
    return(
      <div className={classes.root}>
        <FormControl className={classes.formControl}>
          <Select
            value={this.state.type}
            onChange={this.handleChange}
            displayEmpty
            className={classes.selectEmpty}
            input={<BootstrapInput name={'type'} value={this.state.type} />}
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
            value={this.state.user}
            onChange={this.handleChange}
            displayEmpty
            className={classes.selectEmpty}
            input={<BootstrapInput name={'user'} value={this.state.user} />}
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
            value={this.state.which}
            onChange={this.handleChange}
            displayEmpty
            className={classes.selectEmpty}
            input={<BootstrapInput name={'which'} value={this.state.which} />}
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
    );
  }
}
export default withStyles(styles)(CashSelects);