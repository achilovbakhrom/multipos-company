import React,{Component} from 'react';
import { connect } from "react-redux";
import { withStyles } from "@material-ui/core";
import Plus from "@material-ui/icons/add";
import Button from '@material-ui/core/Button';
import CustomScroll from 'react-custom-scroll';
import EmItem from '../../components/Employee/employee-item';
import 'react-custom-scroll/dist/customScroll.css';
const styles = theme=>({
  scrollbar_wrapper:{}
});


class CrmScroll extends Component{
  renderItems(){
    let arr = [];
    for(let i = 0;i<25;i++){
      arr.push(<EmItem key={i} />);
    }
    return arr;
  }
  render(){
    const {classes} = this.props;
    return(
      <div className={classes.scrollbar_wrapper}>
        <div style={{maxHeight:'100%'}}>
          <CustomScroll heightRelativeToParent={'90vh'}>
            {this.renderItems()}
          </CustomScroll>
        </div>
      </div>
    );
  };
}

export default withStyles(styles)(CrmScroll);