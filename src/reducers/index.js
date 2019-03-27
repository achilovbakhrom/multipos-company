import { combineReducers } from 'redux';
import companyReducer from './add-company-reducer';
import employeeReducer from './add-employee-reducer';

const rootReducer = combineReducers({
    addedCompany:companyReducer,
    addedEmployee:employeeReducer,
});

export default rootReducer;
