import React, { Component } from 'react';
import styled from 'styled-components';
import Button from '@material-ui/core/Button';

const CompanyContentCentered = styled.div`
  padding-top: 30%;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

class AddCompanyButton extends Component {

  render() {
    return (
      <CompanyContentCentered>
        <Button
          style={{
            fontSize: '18px',
            backgroundColor: '#4bb04f',
            textTransform: 'capitalize',
            color: 'white',
            width: '100%',
            padding:'12px 8px'
          }}>
          Add Company
        </Button>
      </CompanyContentCentered>
    );
  }
}


export default AddCompanyButton;