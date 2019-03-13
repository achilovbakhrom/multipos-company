import React from 'react';

const styles = {
  backgroundColor:'#f44336',
  padding:'5px',
  color:'#fff',
  marginTop:'10px',
  borderRadius:'3px',
};
const ValidationError = (props)=>{
    return(
      <div className="valid-error" style={styles}>
        {props.children}
      </div>
    );
};
export default ValidationError;