import {ADD_CHARACTER,REMOVE_CHARACTER} from '../actions';
import createChatacter from '../helpers/helpers';
const initstate={
    power:0,
    stregth:0
}
function power(state=initstate,action){
     switch(action.type){
         case ADD_CHARACTER:
              
                return {
                    power:state.power+createChatacter(action.id).intelligence,
                    stregth:state.stregth+createChatacter(action.id).strength,
                };
        case REMOVE_CHARACTER:
                return {
                    power:state.power-createChatacter(action.id).intelligence,
                    stregth:state.stregth-createChatacter(action.id).strength,
                };
               // console.log(state);
       
         default:
             return state;
     }
}
export default power;