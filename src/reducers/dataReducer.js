import {FETCH_DATA} from '../actions/dataActions';


const initialState = {
    data : [],
};

const showDataReducer = (state = initialState , action) => {
    switch(action.type){
        case FETCH_DATA : 
        return {
            ...state,isLoading : false, data : action.payload,
            
        }
       default : return state;
    }
    

}

export default showDataReducer;
