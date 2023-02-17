// import {get} from 'lodash';

const INITIAL_STATE = {

 results: [],
 term:0
};

const reducers = (state = INITIAL_STATE, action) => {
 switch (action.type) {

   case "RESULTS": {
     return {
       ...state,
       results: action.payload,
     };
   }
   case "TERM": {
    return {
      ...state,
      term: action.payload,
    };
  }
   default:
     return state;
 }
};
export default reducers;
