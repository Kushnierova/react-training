import { combineReducers } from 'redux';
import { counterReducer } from './counter/counterReducer';
import { todoReducer } from './todos/todosReducer';

export const reducer = combineReducers({
  counter: counterReducer,
  todos: todoReducer,
});
