import React, { Component } from 'react';
import css from './App.module.css';
import FirstLesson from './FirstLesson';
import ToDoListBox from './ToDoListBox';
import SecondLesson from './SecondLesson';
import Clock from './Clock';
import Tabs from './Tabs';
import tabs from './Tabs/tabs.json';
import ThirdLesson from './ThirdLesson';

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
          <li>
            <Clock />
          </li>

          <li>
            <FirstLesson />
          </li>
          <li>
            <ToDoListBox />
          </li>
          <div className={css.containerSecondLesson}>
          <li>
            <SecondLesson onSubmit={this.formSubmitHandler} />
          </li>
          <li>
            <Tabs items={tabs} />
          </li>
          </div>
          <li>
            <ThirdLesson />
          </li>
        </ul>
      </div>
    );
  }
}
export default App;
