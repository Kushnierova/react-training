import { combineReducers } from 'redux';
import { initialState } from './initialState';

const counterReducer = (state = initialState.counter, action) => {
  switch (action.type) {
    case 'increment':
      return {
        ...state,
        total: state.total + action.payload,
        // counter: {
        //   ...state.counter,
        //   total: state.counter.total + action.payload,
        // },
      };
    case 'decrement':
      return {
        ...state,
        total: state.total - action.payload,
      };
    case 'setStep':
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
