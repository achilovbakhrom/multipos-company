import React,{Component} from 'react';
import { withStyles } from "@material-ui/core";
import Grid from "@material-ui/core/Grid";
import defaultImage from "../../resourse/media/avatar.png";
import Typography from "@material-ui/core/Typography";
const styles = theme=>({
  emp_item:{
    borderBottom:'1px solid #ededed',
    padding:'10px',
    '& h5':{
      fontWeight:'bold',
    }
  }
});

class EmpItem extends Component{
  render(){
    const {classes} = this.props;
    return(
      <div className={ classes.emp_item}>
          <Grid container spacing={24}>
            <Grid item md={2}>
              <img src={defaultImage} alt=""/>
            </Grid>
            <Grid item md={10}>
              <Typography variant={'h6'}>
                Lorem ipsum
              </Typography>
              <Typography>
                ceo
              </Typography>
            </Grid>
          </Grid>
      </div>
    );
  }
}
export default withStyles(styles)(EmpItem);