import {createStore} from 'redux';
import { tokenReducer } from './tokens/TokenReducers';

const store = createStore(tokenReducer); 

export default store; 