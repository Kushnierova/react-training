import React, { Component } from 'react';
import css from './App.module.css';
import FirstLesson from './FirstLesson';
import ToDoListBox from './ToDoListBox';
import SecondLesson from './SecondLesson';
// import ThirdLesson from './ThirdLesson';
import Modal from './Modal';
import Clock from './Clock';
import Tabs from './Tabs';
import tabs from './Tabs/tabs.json';
import IconButton from './IconButton';

class App extends Component {
  state = {
    showModal: false,
  };

  formSubmitHandler = data => {
    console.log(data);
  };

  toggleModal = () => {
    this.setState(({ showModal }) => ({
      showModal: !showModal,
    }));
  };

  render() {
    const { showModal } = this.state;
    return (
      <div>
        <ul>
          <li><IconButton/></li>
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
          <li className={css.itemOpenModal}>
            <button
              type="button"
              onClick={this.toggleModal}
              className={css.btnOpenModal}
            >
              Open modal window
            </button>

            {showModal && (
              <Modal onClose={this.toggleModal}>
                <h1>Hi, it is text into the modal window</h1>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                  Voluptates assumenda neque recusandae mollitia accusamus at
                  delectus perferendis corrupti odit in animi suscipit corporis,
                  voluptas cum illo veritatis ad. Itaque, iure.
                </p>
                <button type="button" onClick={this.toggleModal}>
                  close
                </button>
              </Modal>
            )}
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
