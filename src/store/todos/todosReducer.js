const { initialState } = require('store/initialState');
const { CREATETODO } = require('./types');

export const todoReducer = (state = initialState.todos, action) => {
  switch (action.type) {
    case CREATETODO:
      return {
        ...state,
        todo: [...state.todos, { ...action.payload }],
      };
    default:
      return state;
  }
};
