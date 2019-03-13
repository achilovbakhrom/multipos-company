import { combineReducers } from 'redux';
import companyReducer from './add-company-reducer';

const rootReducer = combineReducers({
    addedCompany:companyReducer,
});

export default rootReducer;
