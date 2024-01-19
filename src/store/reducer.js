import { combineReducers } from 'redux';
import { initialState } from './initialState';
import { DECREMENT, INCREMENT, SETSTEP } from './types';

const counterReducer = (state = initialState.counter, action) => {
  switch (action.type) {
    case INCREMENT:
      return {
        ...state,
        total: state.total + action.payload,
        // counter: {
        //   ...state.counter,
        //   total: state.counter.total + action.payload,
        // },
      };
    case DECREMENT:
      return {
        ...state,
        total: state.total - action.payload,
      };
    case SETSTEP:
      return {
        ...state,
        step: action.payload,
      };
    default:
      return state;
  }
};

const todoReducer = (state = initialState.todos, action) => {
  switch (action.type) {
    case 'createTodo':
      return {
        ...state,
        todo: [...state.todos, { ...action.payload }],
      };
    default:
      return state;
  }
};

export const reducer = combineReducers({
  counter: counterReducer,
  todos: todoReducer,
});
