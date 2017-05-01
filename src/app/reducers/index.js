import { combineReducers } from 'redux'
import resumeInfo from './setInfoReducer'
// import visibilityFormId from './VisibilityFormId'
import formSchema from './formSchema'
import { indexMapFormId } from '../constants';


const actionType = (state = 'SET_BASIC_INFO', action) => {
    const FORM_ID = action.index? indexMapFormId[action.index]:'BASIC_INFO';
    switch (action.type) {
        case 'SET_FORM_SCHEMA':
            return 'SET_'+FORM_ID;
        default:
            return state
    }
}


const rootReducer = combineReducers({
  resumeInfo,formSchema,actionType
});

// here,this.state = {...,formSchema,actionType}



export default rootReducer;