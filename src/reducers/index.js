import { combineReducers } from 'redux';
import companyReducer from './add-company-reducer';
import employeeReducer from './add-employee-reducer';
// import storeReducer from './add-store-reducer';

const rootReducer = combineReducers({
    addedCompany:companyReducer,
    addedEmployee:employeeReducer,
    // addedStore:storeReducer,
});

export default rootReducer;
