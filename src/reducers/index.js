import {combineReducers} from 'redux';
import todosReducer from './todo';
import incDecReducer from './inc_dec';

const rootReducers = combineReducers({
  todos : todosReducer,
  count : incDecReducer
});

export default rootReducers;