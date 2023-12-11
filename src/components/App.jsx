import React, { Component } from 'react';
import FirstLesson from './FirstLesson';
import ToDoListBox from './ToDoListBox';
import SecondLesson from './SecondLesson';

class App extends Component {
  state = {};

  render() {
    return (
      <div>
        <p> React template</p>
        <ul>
          {/* <li>
          <p> II заняття</p>
          <FirstLesson />
        </li>
        <li>
          <ToDoListBox />
        </li> */}
          <li>
            <SecondLesson />
          </li>
        </ul>
      </div>
    );
  }
}
export default App;
