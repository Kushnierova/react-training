// import React, { Component } from 'react';
import { useEffect, useState, useRef } from 'react';
import css from './Clock.module.css';

export default function Clock() {
  const [time, setTime] = useState(() => new Date());
  const intervalId = useRef(null);

  useEffect(() => {
    // intervalId.current = 
    setInterval(() => {
      console.log('Цей інтервал кожні 2000ms', Date.now());
      setTime(new Date());
    }, 2000);
return()=>{
  console.log('This is reset')
}
  });

  const stop = () => {
    clearInterval(intervalId.current);
  };

  return (
    <div className={css.container}>
      <div className={css.face}>Time: {time.toLocaleTimeString()}</div>
      <button className={css.btn} type="button" onClick={stop}>
        Stop Clock
      </button>
    </div>
  );
}

// class OldClock extends Component {
//   state = {
//     time: new Date().toLocaleTimeString(),
//   };

//   intervalId = null;

//   componentDidMount() {
//     console.log('setIntervalId');

//     this.intervalId = setInterval(
//       () => this.setState({ time: new Date().toLocaleTimeString() }),
//       1000
//     );
//   }

//   componentWillUnmount() {
//     console.log('Цей метод викликається перед розмонтуванням компоненту');
//     this.stop();
//   }
//   stop = () => {
//     clearInterval(this.intervalId);
//   };

//   render() {
//     return (
//       <div className={css.container}>
//         <div className={css.face}>Time: {this.state.time}</div>
//         <button type="button" onClick={this.stop}></button>
//       </div>
//     );
//   }
// }

// export default Clock;
