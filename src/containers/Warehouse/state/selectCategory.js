import React,{Component} from 'react';
import { withStyles } from '@material-ui/core/styles/index';
import MenuItem from '@material-ui/core/MenuItem/index';
import FormControl from '@material-ui/core/FormControl/index';
import Select from '@material-ui/core/Select/index';
import BootstrapInput from '../../../components/Common/BootstrapInput';

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
      category:'',
      subcategory:'',
      productclass:'',
      vendor: '',
      warehouse1: ''
    }
  }

  handleChange = event => {
    console.log(event.target.value);
    this.setState({ [event.target.name]: event.target.value });
  };

  render(){
    const {classes} = this.props;
    return(
      <div className={classes.root}>
        <FormControl className={classes.formControl}>
          <Select
            value={this.state.category}
            onChange={this.handleChange}
            displayEmpty
            className={classes.selectEmpty}
            input={<BootstrapInput name={'category'} value={this.state.category} />}
          >
            <MenuItem value="">
              <em>Category</em>
            </MenuItem>
            <MenuItem value={10}>Ten</MenuItem>
            <MenuItem value={20}>Twenty</MenuItem>
            <MenuItem value={30}>Thirty</MenuItem>
          </Select>
        </FormControl>
        <FormControl className={classes.formControl}>
          <Select
            value={this.state.subcategory}
            onChange={this.handleChange}
            displayEmpty
            className={classes.selectEmpty}
            input={<BootstrapInput name={'subcategory'} value={this.state.subcategory} />}
          >
            <MenuItem value="">
              <em>Subcategory</em>
            </MenuItem>
            <MenuItem value={10}>Ten</MenuItem>
            <MenuItem value={20}>Twenty</MenuItem>
            <MenuItem value={30}>Thirty</MenuItem>
          </Select>
        </FormControl>
        <FormControl className={classes.formControl}>
          <Select
            value={this.state.productclass}
            onChange={this.handleChange}
            displayEmpty
            className={classes.selectEmpty}
            input={<BootstrapInput name={'productclass'} value={this.state.productclass} />}
          >
            <MenuItem value="">
              <em>Product Class</em>
            </MenuItem>
            <MenuItem value={10}>Ten</MenuItem>
            <MenuItem value={20}>Twenty</MenuItem>
            <MenuItem value={30}>Thirty</MenuItem>
          </Select>
        </FormControl>
        <FormControl className={classes.formControl}>
          <Select
            value={this.state.vendor}
            onChange={this.handleChange}
            displayEmpty
            className={classes.selectEmpty}
            input={<BootstrapInput name={'vendor'} value={this.state.vendor} />}
          >
            <MenuItem value="">
              <em>Vendor</em>
            </MenuItem>
            <MenuItem value={10}>Ten</MenuItem>
            <MenuItem value={20}>Twenty</MenuItem>
            <MenuItem value={30}>Thirty</MenuItem>
          </Select>
        </FormControl>
        <FormControl className={classes.formControl}>
          <Select
            value={this.state.warehouse1}
            onChange={this.handleChange}
            displayEmpty
            className={classes.selectEmpty}
            input={<BootstrapInput name={'warehouse1'} value={this.state.warehouse1} />}
          >
            <MenuItem value="">
              <em>Warehosue 1</em>
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