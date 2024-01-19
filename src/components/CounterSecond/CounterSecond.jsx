// import { useReducer } from 'react';
// import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import css from './CounterSecond.module.css';
import Step from 'components/Step/Step';
import { increment } from 'store/action';
import { decrement } from 'store/action';

const CounterSecond = () => {
  // const [total, setTotal] = useState();
  const { total, step } = useSelector(state => state.counter);

  const dispatch = useDispatch();

  const handleCounterAIncrement = () => {
    dispatch(increment(step));
  };
  const handleCounterBIncrement = () => {
    dispatch(decrement(step));
  };

  return (
    <div className={css.container}>
      <Step />
      <p className={css.count}>{total}</p>
      <button
        className={css.btn}
        type="button"
        onClick={handleCounterAIncrement}
      >
        Increase
      </button>
      <button
        className={css.btn}
        type="button"
        onClick={handleCounterBIncrement}
      >
        Decrease
      </button>
    </div>
  );
};

// function countReducer(state, action) {
//   switch (action.type) {
//     case 'increment':
//       // return state + action.payload;
//       return { ...state, count: state.count + action.payload };

//     case 'decrement':
//       // return state - action.payload;
//       return { ...state, count: state.count - action.payload };

//     default:
//       throw new Error('Unsuported action type $action.type{}');
//   }
// }
// function init(initialState) {
//   // використовується наприклад для Локал Сторедж, загрузка перший раз
//   return { ...initialState, count: initialState.count + 100 };
// }

// function CounterSecond() {
//   // const [count, setCount] = useState(0);

//   // const [count, dispatch] = useReducer(countReducer, 0 );
//   const [state, dispatch] = useReducer(countReducer, { count: 0 }, init);
//   // const [state, dispatch] = useReducer(reducer, 0, init);

//   return (
//     <div className={css.container}>
//       <p className={css.count}>{state.count}</p>
//       <button
//         className={css.btn}
//         type="button"
//         onClick={() => dispatch({ type: 'increment', payload: 1 })}
//       >
//         Increase
//       </button>
//       <button
//         className={css.btn}
//         type="button"
//         onClick={() => dispatch({ type: 'decrement', payload: 1 })}
//       >
//         Decrease
//       </button>
//     </div>
//   );
// }

export default CounterSecond;
