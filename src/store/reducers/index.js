import { combineReducers } from 'redux';
import charsReducer from './charsReducer';
import characters from './characters';

const rootReducer = combineReducers({
    characters,
    charsReducer
})

export default rootReducer