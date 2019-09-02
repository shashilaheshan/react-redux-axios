import {ADD_CHARACTER,REMOVE_CHARACTER} from '../actions';
import createChatacter from '../helpers/helpers';
 function heroes(state=[],action){

    switch(action.type){
        case ADD_CHARACTER:
            
       let heroes=[...state,createChatacter(action.id)];
       return heroes;
       case REMOVE_CHARACTER:
       let heroz=state.filter(item=>item.id!==action.id);
       return heroz;
        default:
            return state;
    }
}

export default heroes;