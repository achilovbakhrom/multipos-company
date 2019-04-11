import React,{Component} from 'react';
import Button from "@material-ui/core/Button/index";
import { withStyles } from '@material-ui/core/styles/index';
import { rgbToColorString } from "polished/lib/index";

const styles = theme =>({
  btns_wrapper:{
    display:'flex',
      flexWrap:'wrap',
  },
  button:{
    backgroundColor:'#fff',
    paddingTop:'12px',
    paddingBottom:'13px',
    borderRadius:'4px',
    boxShadow:'0px 1px 3px -1px '+rgbToColorString({ red: 0, green: 0, blue: 0, alpha: 0.5 }),
    flexGrow:1,
    flexBasis:0,
    '&:hover':{
      backgroundColor:theme.palette.primary.main,
      color:'#fff',
    }
  }
});

class CashButtons extends Component{
  render(){
    const {classes} = this.props;
    return(
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
    );
  }
}
export default withStyles(styles)(CashButtons);