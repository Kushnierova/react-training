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
import styled from 'styled-components';
import Dogs from 'pages/Dogs';
import DogDetails from 'pages/DogDetails';

const StyledLink = styled(NavLink)`
  color: white;

  &.active {
    color: orange;
  }
`;

class App extends Component {
  state = {};

  formSubmitHandler = data => {
    console.log(data);
  };

  render() {
    return (
      <div>
        <header className={css.nav}>
          <StyledLink to="/">Home</StyledLink>
          <StyledLink to="/userName">User Name</StyledLink>
          <StyledLink to="/dogs">Dogs</StyledLink>
          <StyledLink to="/singUpForm">Sing up Form</StyledLink>
          <StyledLink to="/pokemons">Pokemons</StyledLink>
          <StyledLink to="/colorPicker">Color Picker</StyledLink>
          <StyledLink to="/clock">Clock</StyledLink>
          <StyledLink to="/counters">Counters</StyledLink>
          <StyledLink to="/toDoList">To Do List</StyledLink>
          <StyledLink to="/news">News</StyledLink>
          <StyledLink to="/tabs">Tabs</StyledLink>
          <StyledLink to="/playerAndReader">Player & Reader</StyledLink>
          <StyledLink to="/friends">Friends</StyledLink>
        </header>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/userName" element={<UserMenu />} />

          <Route path="/dogs" element={<Dogs />} />
          <Route path="/dogs/:dogId" element={<DogDetails />} />

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
