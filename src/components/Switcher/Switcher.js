import React, {Component} from 'react';
import styled from 'styled-components';

const Container = styled.div`
  width: 200px;
  min-height: 50px;
  min-width: 200px;
  border-radius: 10px;
  background-color: green;
`;

const SwitcherCellFirst = styled.div`
  border-top-left-radius: 10px;
  border-bottom-left-radius: ${(props) => {}}10px;
`;

const SwitcherCell = (props) => {

  let {isFirst, isLast, isSelected} = props;
  if (!isFirst)
    isFirst = false;
  if (!isLast)
    isLast = false;
  if (!isSelected)
    isSelected = false;





};

class Switcher extends Component {



  constructor(props) {
    super(props);
    this.switched = this.switched.bind(this);
  }

  switched(section) {


  }

  render() {
    return (
      <Container/>
    )
  }
}

export default Switcher;