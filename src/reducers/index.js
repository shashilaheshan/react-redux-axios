import {combineReducers} from 'redux';
import heroes from './heroes-reducer';
import characters from './charcters-reducer';
import power from './power-reducer';
import recepe from './recepe_reducer';


const rootReducer=combineReducers({
    characters,
    heroes,
    power,
    recepe
});
export default rootReducer;