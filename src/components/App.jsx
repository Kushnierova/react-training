import React, { Component } from 'react';
import FirstLesson from './FirstLesson';
import ToDoListBox from './ToDoListBox';
import SecondLesson from './SecondLesson';

class App extends Component {
  state = {};

  formSubmitHandler = data => {
    console.log(data);
  };

  render() {
    return (
      <div>
        <ul>
          <li>
            <FirstLesson />
          </li>
          <li>
            <ToDoListBox />
          </li>
          <li>
            <SecondLesson onSubmit={this.formSubmitHandler} />
          </li>
        </ul>
      </div>
    );
  }
}
export default App;
