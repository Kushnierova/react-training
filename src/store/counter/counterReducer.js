import { initialState } from 'store/initialState';
import { DECREMENT, INCREMENT, SETSTEP } from './types';

export const counterReducer = (state = initialState.counter, action) => {
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