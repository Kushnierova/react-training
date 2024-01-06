import React, { Component } from 'react';
import css from './App.module.css';
import FirstLesson from './FirstLesson';
import ToDoListBox from './ToDoListBox';
import Clock from './Clock';
import Tabs from './Tabs';
import tabs from './Tabs/tabs.json';
import ThirdLesson from './ThirdLesson';
import Pokemon from './Pokemon';
import SingUpForm from './SingUpForm';
import Counter from './Counter/Counter';
import CounterSecond from './CounterSecond';
import Friends from './Friends';
import News from './News/';
// import Appbar from './AppBar/AppBar';

class App extends Component {
  state = {};

  formSubmitHandler = data => {
    console.log(data);
  };

  // toggleModal = () => {
  //   this.setState(({ showModal }) => ({
  //     showModal: !showModal,
  //   }));
  // };

  render() {
    return (
      <div>
        <ul>
          <div className={css.containerFirstLesson}>
            <div className={css.containerInFirstLesson}>
              {/* <li><Appbar /></li> */}
              <li>
                <Clock />
              </li>
              <li>
                <FirstLesson />
              </li>
              <li>
                <Counter />
              </li>
              <li>
                <CounterSecond />
              </li>
            </div>

            <li>
              <ToDoListBox />
            </li>
            <li>
              <News />
            </li>
          </div>
          <div className={css.containerSecondLesson}>
            <li>
              <SingUpForm onSubmit={this.formSubmitHandler} />
            </li>
            <li>
              <Tabs items={tabs} />
            </li>
          </div>
          <li>
            <ThirdLesson />
          </li>
          <li>
            <Pokemon />
          </li>
          <li>
            <Friends />
          </li>
        </ul>
      </div>
    );
  }
}
export default App;
