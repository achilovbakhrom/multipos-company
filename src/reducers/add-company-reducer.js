import {ADD_COMPANY} from '../constants/index';

// const initialState = {
//   addedCompany: null
// };

const companyReducer = (state = {}, action) => {
  switch (action.type) {
    case ADD_COMPANY:
      return action.payload;
    default:
      return state;
  }
};

export default companyReducer;
