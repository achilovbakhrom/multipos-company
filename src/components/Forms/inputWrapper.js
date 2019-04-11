import React from 'react';

const FieldWrapper = (props) => {
  return(
    <div style={{marginBottom:'20px'}}>
      {props.children}
    </div>
  );
};
export default FieldWrapper;