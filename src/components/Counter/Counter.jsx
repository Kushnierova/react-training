// import React, { Component } from 'react';
import { useState, useEffect } from 'react';
import css from './Counter.module.css';

function Counter() {
  const [counterA, setCounterA] = useState(0);
  const [counterB, setCounterB] = useState(0);

  const handleCounterAIncrement = () => {
    setCounterA(prevState => prevState + 1);
  };
  const handleCounterBIncrement = () => {
    setCounterB(state => state + 1);
  };
  // Реєструємо ефект, функція виконується
  // КОЖЕН РАЗ коли оновлюється Prop або State
  //   useEffect(() => {
  //     console.log('Запускається useEffect');
  //   },);

  //   Якщо вкінці useEffect стоїть пустий масив [](це значить що залежностей немає)
  // useEffect запуститься тільки при першому рендері
  //   useEffect(() => {
  //     console.log('Запускається useEffect');
  //   }, []);

  // //   useEffect буде запускатися лише коли змінюється counterA
  //   useEffect(() => {
  //     console.log(counterA+'Запускається useEffect'+Date.now());
  //   }, [counterA]);


  useEffect(() => {
    // console.log('Запускається useEffect');
    const totalClicks = counterA + counterB;

    document.title = `клікнули ${totalClicks} разів`;
  }, [counterA, counterB]);

  return (
    <div className={css.container}>
      <button
        className={css.btn}
        type="button"
        onClick={handleCounterAIncrement}
      >
        "A" клікнули <span className={css.number}>{counterA}</span> разів
      </button>
      <button
        className={css.btn}
        type="button"
        onClick={handleCounterBIncrement}
      >
        "B" клікнули <span className={css.number}>{counterB}</span> разів
      </button>
    </div>
  );
}

// class OldCounter extends Component {
//   state = {
//     counterA: 0,
//     counterB: 0,
//   };
//   handleCounterAIncrement = () => {
//     this.setState(({ counterA }) => ({ counterA: counterA + 1 }));
//   };
//   handleCounterBIncrement = () => {
//     this.setState(({ counterB }) => ({ counterB: counterB + 1 }));
//   };
//   componentDidMount() {
//     const { counterA, counterB } = this.state;
//     const totalClicks = counterA + counterB;

//     document.title = `Всього клікнули ${totalClicks} разів`;
//   }
//   componentDidUpdate(prevProps, prevstate) {
//     const { counterA, counterB } = this.state;

//     if (prevstate.counterA !== counterA || prevstate.counterB !== counterB) {
//       const totalClicks = counterA + counterB;

//       document.title = `Всього клікнули ${totalClicks} разів`;
//     }
//   }
//   render() {
//     return (
//       <div className={css.container}>
//         <button className={css.btn} type="button" onClick={this.handleCounterAIncrement}>
//           "A" клікнули {this.state.counterA} разів
//         </button>
//         <button className={css.btn} type="button" onClick={this.handleCounterBIncrement}>
//           "B" клікнули {this.state.counterB} разів
//         </button>
//       </div>
//     );
//   }
// }

export default Counter;
