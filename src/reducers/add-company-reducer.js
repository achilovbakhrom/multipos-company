import {ADD_COMPANY} from '../constants/index';

// const initialState = {
//   addedCompany: null
// };

const companyReducer = (state = {}, action) => {
  switch (action.type) {
    case ADD_COMPANY:
      return {...state, addedCompany: action.payload};
    default:
      return state;
  }
};

export default companyReducer;
