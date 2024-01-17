import React, { Component, lazy } from 'react';
import { Route, Routes } from 'react-router-dom';
import css from './App.module.css'

import tabs from './Tabs/tabs.json';
import Layout from './Layout/Layout';

const FirstLesson = lazy(() => import('./FirstLesson'));
const ToDoListBox = lazy(() => import('./ToDoListBox'));
const Clock = lazy(() => import('./Clock'));
const Tabs = lazy(() => import('./Tabs'));
const ThirdLesson = lazy(() => import('./ThirdLesson'));
const Pokemon = lazy(() => import('./Pokemon'));
const Counter = lazy(() => import('./Counter/Counter'));
const CounterSecond = lazy(() => import('./CounterSecond'));
const SingUpForm = lazy(() => import('./SingUpForm'));
const Friends = lazy(() => import('./Friends'));
const News = lazy(() => import('./News/'));
const UserMenu = lazy(() => import('./UserMenu/UserMenu'));

const Home = lazy(() => import('pages/Home'));
const Dogs = lazy(() => import('pages/Dogs/Dogs'));
const NotFound = lazy(() => import('pages/NotFound'));
const DogDetails = lazy(() => import('pages/DogDetails'));
const Gallery = lazy(() => import('./DogGallery/DogGallery'));

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
                <div className="container">
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
