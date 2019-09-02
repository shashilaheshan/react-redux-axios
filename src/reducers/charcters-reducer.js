import {ADD_CHARACTER,REMOVE_CHARACTER} from '../actions';
import chatacters_json from '../data/chatacters.json';
import createChatacter from '../helpers/helpers';
function characters(state=chatacters_json,action){
    switch(action.type){
        case ADD_CHARACTER:
            let chars=state.filter(item=>item.id!==action.id);
            return chars;
        case REMOVE_CHARACTER:
            let charz=[...state,createChatacter(action.id)];
            return charz;
        default:
            return state;
    }
}
export default characters;