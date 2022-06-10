import showDataReducer from './dataReducer';
import {combineReducers} from 'redux';

const rootReducer = combineReducers({
    data : showDataReducer
})

export default rootReducer;
