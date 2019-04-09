import React,{Component} from 'react';
import { withStyles } from "@material-ui/core";
import CustomScroll from 'react-custom-scroll';
import ScrollbarHOC from '../../containers/Employee/ScrollbarHOC';
import 'react-custom-scroll/dist/customScroll.css';

const styles = theme=>({
  scrollbar_wrapper:{}
});


class Scrollbar extends Component{
  constructor(props){
    super(props);
  }
  render(){
    const {classes} = this.props;
    return(
      <div className={classes.scrollbar_wrapper}>
        <div style={{maxHeight:'100%'}}>
          <CustomScroll heightRelativeToParent={'73vh'}>
            {this.props.items}
          </CustomScroll>
        </div>
      </div>
    );
  };
}

export default withStyles(styles)(ScrollbarHOC(Scrollbar));