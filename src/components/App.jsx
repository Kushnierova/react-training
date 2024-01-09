import React, { Component } from 'react';
import { Route, Routes } from 'react-router-dom';
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
import Dogs from 'pages/Dogs/Dogs';
import DogDetails from 'pages/DogDetails';
import Layout from './Layout/Layout';
import Gallery from './DogGallery/DogGallery';

class App extends Component {
  state = {};

  formSubmitHandler = data => {
    console.log(data);
  };

  render() {
    return (
      <div>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Home />} />
            <Route path="userName" element={<UserMenu />} />

            <Route path="dogs" element={<Dogs />} />
            <Route path="dogs/:dogId" element={<DogDetails />}>
              <Route path="subbreeds" element={<div>Subbreeds</div>} />
              <Route path="gallery" element={<Gallery />} />
            </Route>

            <Route
              path="singUpForm"
              element={<SingUpForm onSubmit={this.formSubmitHandler} />}
            />
            <Route path="pokemons" element={<Pokemon />} />
            <Route path="colorPicker" element={<FirstLesson />} />
            <Route path="clock" element={<Clock />} />
            <Route
              path="counters"
              element={
                <div className='container'>
                  <Counter />
                  <CounterSecond />
                </div>
              }
            />
            <Route path="toDoList" element={<ToDoListBox />} />
            <Route path="news" element={<News />} />
            <Route path="tabs" element={<Tabs items={tabs} />} />
            <Route path="playerAndReader" element={<ThirdLesson />} />
            <Route path="friends" element={<Friends />} />
            <Route path="*" element={<NotFound />} />
          </Route>
        </Routes>
      </div>
    );
  }
}
export default App;
