import React,{Component} from 'react';
import { withStyles } from "@material-ui/core";
import Plus from "@material-ui/icons/add";
import Button from '@material-ui/core/Button';
import CustomScroll from 'react-custom-scroll';
import EmItem from '../../components/Employee/employee-item';
import 'react-custom-scroll/dist/customScroll.css';
const styles = theme=>({
    scrollbar_wrapper:{}
});

class Employee extends Component{
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
        <Button style={{
          backgroundColor: 'white',
          fontSize: '20px',
          textTransform: 'capitalize',
          color: '#49a4de',
          width: '100%',
          padding:'20px 0',
          borderBottom:'1px solid #ededed',
        }}
        >
          <Plus />
          Add employee
        </Button>
        <div style={{maxHeight:'100%'}}>
          <CustomScroll heightRelativeToParent={'90vh'}>
            {this.renderItems()}
          </CustomScroll>
        </div>
      </div>
    );
  };
}

export default withStyles(styles)(Employee);