import { useReducer } from 'react';
import css from './CounterSecond.module.css';


function countReducer(state, action) {
  switch (action.type) {
    case 'increment':
      // return state + action.payload;
      return { ...state, count: state.count + action.payload };

    case 'decrement':
      // return state - action.payload;
      return { ...state, count: state.count - action.payload };

    default:
      throw new Error('Unsuported action type $action.type{}');
  }
}



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
function init(initialState) {
  // використовується наприклад для Локал Сторедж, загрузка перший раз
  return { ...initialState, count: initialState.count + 100 };
}

function CounterSecond() {
  // const [count, setCount] = useState(0);

  // const [count, dispatch] = useReducer(countReducer, 0 );
  const [state, dispatch] = useReducer(countReducer, { count: 0 }, init);
  // const [state, dispatch] = useReducer(reducer, 0, init);

  return (
    <div className={css.container}>
      <p className={css.count}>{state.count}</p>
      <button
        className={css.btn}
        type="button"
        onClick={() => dispatch({ type: 'increment', payload: 1 })}
      >
        Increase
      </button>
      <button
        className={css.btn}
        type="button"
        onClick={() => dispatch({ type: 'decrement', payload: 1 })}
      >
        Decrease
      </button>
    </div>
  );
}

export default CounterSecond;
