import React, { Component } from 'react';
import css from './Clock.module.css';

class Clock extends Component {
  state = {
    time: new Date().toLocaleTimeString(),
  };

  intervalId = null;

  componentDidMount() {
    console.log('setIntervalId');

    this.intervalId = setInterval(
      () => this.setState({ time: new Date().toLocaleTimeString() }),
      1000
    );
  }

//   componentWillUnmount() {
//     clearInterval(this.intervalId);
//   }

  render() {
    return (
      <div className={css.container}>
        <div className={css.face}>Time: {this.state.time}</div>
      </div>
    );
  }
}
export default Clock;
