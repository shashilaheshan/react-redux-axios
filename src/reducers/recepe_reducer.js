import {GET_RECEPES,LOADING} from '../actions';
const initStateRecepes={
    recepe:[],
    loading:false
}
function recepe(state=initStateRecepes,action){

    switch(action.type){
        case LOADING:
            return {
                recepe:[],
                loading:true
            };
        case GET_RECEPES:
            return {
                recepe:action.items,
                loading:false
            };
         
        default:
            return state;
    }
}
export default recepe;