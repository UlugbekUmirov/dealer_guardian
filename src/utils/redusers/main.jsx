// import {get} from 'lodash';

const INITIAL_STATE = {

 results: [],
};

const reducers = (state = INITIAL_STATE, action) => {
 switch (action.type) {

   case "RESULTS": {
     return {
       ...state,
       results: action.payload,
     };
   }
   default:
     return state;
 }
};
export default reducers;
