import React,{Component} from 'react';
import Button from "@material-ui/core/Button/index";
import { withStyles } from '@material-ui/core/styles/index';
import Select from "@material-ui/core/Select";
import BootstrapInput from "../../Common/BootstrapInput";
import MenuItem from "@material-ui/core/MenuItem";
import FormControl from "@material-ui/core/FormControl";

const styles = theme =>({
  btns_wrapper:{
    display:'flex',
    flexWrap:'wrap',
    flexDirection:'column',
  },
  button:{
    backgroundColor:'#fff',
    paddingTop:'15px',
    paddingBottom:'15px',
    borderRadius:0,
    boxShadow:'none',
    flexGrow:1,
    borderBottom:`1px solid ${theme.common.gray}`,
    '&:hover':{
      backgroundColor:theme.palette.primary.main,
      color:'#fff',
    }
  },
  buttons_heading:{
    backgroundColor: theme.palette.primary.header,
    paddingTop:'12px',
    paddingBottom:'13px',
    borderTopLeftRadius:'4px',
    borderTopRightRadius:'4px',
    textAlign:'center',
    color:"#fff",
  },
  currency_select:{
    marginBottom:'20px',
  }
});

class PaymentType extends Component{
  constructor(props){
    super(props);
    this.state = {
      type:'',
    }
  }
  render(){
    const {classes} = this.props;
    return(
      <div className={classes.btns_wrapper}>
        <FormControl className={classes.currency_select}>
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
            <MenuItem value={10}>Usd</MenuItem>
            <MenuItem value={20}>Euro</MenuItem>
            <MenuItem value={30}>Rub</MenuItem>
          </Select>
        </FormControl>
        <div className={classes.buttons_heading}>
          Payment Type
        </div>
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
    );
  }
}
export default withStyles(styles)(PaymentType);