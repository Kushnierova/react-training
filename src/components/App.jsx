import React, { Component } from 'react';
import { NavLink, Route, Routes } from 'react-router-dom';
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
import UserMenu from './UserMenu/UserMenu';
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
        <nav className={css.nav}>
          <NavLink to="/">Home</NavLink>
          <NavLink to="/userName">User Name</NavLink>
          <NavLink to="/singUpForm">Sing up Form</NavLink>
          <NavLink to="/pokemons">Pokemons</NavLink>
          <NavLink to="/colorPicker">Color Picker</NavLink>
          <NavLink to="/clock">Clock</NavLink>
          <NavLink to="/counters">Counters</NavLink>
          <NavLink to="/toDoList">To Do List</NavLink>
          <NavLink to="/news">News</NavLink>
          <NavLink to="/tabs">Tabs</NavLink>
          <NavLink to="/playerAndReader">Player & Reader</NavLink>
          <NavLink to="/friends">Friends</NavLink>
        </nav>
        <Routes>
          <Route path="/" element={<div>Home</div>} />
          <Route
            path="/userName"
            element={
              <div>
                <UserMenu />
              </div>
            }
          />
          <Route
            path="/singUpForm"
            element={
              <div>
                <SingUpForm onSubmit={this.formSubmitHandler} />
              </div>
            }
          />
          <Route
            path="/pokemons"
            element={
              <div>
                <Pokemon />
              </div>
            }
          />
          <Route
            path="/colorPicker"
            element={
              <div>
                <FirstLesson />
              </div>
            }
          />
          <Route
            path="/clock"
            element={
              <div>
                {' '}
                <Clock />
              </div>
            }
          />
          <Route
            path="/counters"
            element={
              <div>
                {' '}
                <Counter />
                <CounterSecond />
              </div>
            }
          />
          <Route
            path="/toDoList"
            element={
              <div>
                <ToDoListBox />
              </div>
            }
          />
          <Route
            path="/news"
            element={
              <div>
                <News />
              </div>
            }
          />
          <Route
            path="/tabs"
            element={
              <div>
                <Tabs items={tabs} />
              </div>
            }
          />
          <Route
            path="/playerAndReader"
            element={
              <div>
                <ThirdLesson />
              </div>
            }
          />
          <Route
            path="/friends"
            element={
              <div>
                {' '}
                <Friends />
              </div>
            }
          />
        </Routes>
      </div>
    );
  }
}
export default App;
