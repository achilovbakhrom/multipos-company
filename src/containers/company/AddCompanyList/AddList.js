import React, {Component} from 'react';
import styled from 'styled-components';
import Button from '@material-ui/core/Button';
const ContentListComponent = styled.div``;

class AddList extends Component{
  constructor(props){
    super(props);
    this.state ={
      items: []
    }
  }
  add() {
    let value = Math.floor((Math.random() * 10) + 1);
    let items = this.state.items;
    items.push(value);
    this.setState({
      items: items
    });
  }
  render(){
    let divItems = this.state.items.map((item, index) => {
      return <div key={index}>{item}</div>;
    });
    return(
      <div>
        <ContentListComponent>
          {divItems}
            <Button style={{
              backgroundColor: 'white',
              fontSize: '20px',
              textTransform: 'capitalize',
              color: '#49a4de',
              width: '100%',
              padding:'20px 0'
            }}
                    onClick={this.add.bind(this)}
            >
              + Add Company
            </Button>
        </ContentListComponent>
      </div>
    )
  }
}

export default AddList;