import React, { Component } from 'react';
import css from './App.module.css';
import FirstLesson from './FirstLesson';
import ToDoListBox from './ToDoListBox';
import SecondLesson from './SecondLesson';
// import ThirdLesson from './ThirdLesson';
import Clock from './Clock';
import Tabs from './Tabs';
import tabs from './Tabs/tabs.json';

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
          <li></li>
          <li>
            <Clock />
          </li>
          <li>
            <Tabs items={tabs} />
          </li>
          <li>
            <FirstLesson />
          </li>
          <li>
            <ToDoListBox />
          </li>
          {/* <li className={css.itemOpenModal}>
            <button
              type="button"
              onClick={this.toggleModal}
              className={css.btnOpenModal}
            >
              <AddIcon />
            </button>

            {showModal && (
              <Modal onClose={this.toggleModal}>
                <ToDoEditor onSubmit={this.addTodo} />
              </Modal>
            )}
          </li> */}
          <li>
            <SecondLesson onSubmit={this.formSubmitHandler} />
          </li>
        </ul>
      </div>
    );
  }
}
export default App;
