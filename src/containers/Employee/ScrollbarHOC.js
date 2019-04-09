import React,{Component} from 'react';
import Plus from "@material-ui/icons/add";
import Button from '@material-ui/core/Button';
import EmItem from '../../components/Employee/employee-item';

export default function WrapperForScrollbar(WrappedComponent){
  return class extends Component{
    constructor(props){
      super(props);
    }
    renderItems(){
      let arr = [];
      for(let i = 0;i<25;i++){
        arr.push(<EmItem key={i} />);
      }
      return arr;
    }
    testMethod(){
      console.log('test');
    }
    renderButton(){
      return(
        <Button style={{
          backgroundColor: 'white',
          fontSize: '20px',
          textTransform: 'capitalize',
          color: '#49a4de',
          width: '100%',
          padding:'20px 0',
          borderBottom:'1px solid #ededed',
        }}
                onClick={()=>{this.testMethod()}}
        >
          <Plus />
          Add employee
        </Button>
      );
    }
    render(){
      const items = this.renderItems();
      return(
        <>
          {this.props.showBtn?(
            this.renderButton()
          ):('')}
          <WrappedComponent items={items} {...this.props}/>
        </>
      );
    }
  }
}