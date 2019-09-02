export const ADD_CHARACTER="ADD_CHARACTER";
export const REMOVE_CHARACTER="REMOVE_CHARACTER";
export const GET_RECEPES="GET_RECEPES";
export const LOADING="LOADING";
export function addCharacterById(id){
    const action={
        type:ADD_CHARACTER,
        id
    }
    return action;
}
export function removeCharacterById(id){
    const action={
        type:REMOVE_CHARACTER,
        id
    }
    return action;
}
export function getRecepes(items){
    const action={
        type:GET_RECEPES,
        items
    }
    return action;
}
export function gettingRecepes(){
    const action={
        type:LOADING,
    
    }
    return action;
}


