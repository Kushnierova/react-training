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
import NotFound from 'pages/NotFound';
import Home from 'pages/Home';

class App extends Component {
  state = {};

  formSubmitHandler = data => {
    console.log(data);
  };

  render() {
    return (
      <div>
        <header className={css.nav}>
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
        </header>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/userName" element={<UserMenu />} />
          <Route
            path="/singUpForm"
            element={<SingUpForm onSubmit={this.formSubmitHandler} />}
          />
          <Route path="/pokemons" element={<Pokemon />} />
          <Route path="/colorPicker" element={<FirstLesson />} />
          <Route path="/clock" element={<Clock />} />
          <Route
            path="/counters"
            element={
              <div>
                <Counter />
                <CounterSecond />
              </div>
            }
          />
          <Route path="/toDoList" element={<ToDoListBox />} />
          <Route path="/news" element={<News />} />
          <Route path="/tabs" element={<Tabs items={tabs} />} />
          <Route path="/playerAndReader" element={<ThirdLesson />} />
          <Route path="/friends" element={<Friends />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </div>
    );
  }
}
export default App;
