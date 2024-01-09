import { NavLink, Outlet } from 'react-router-dom';
import styled from 'styled-components';
import css from './Layout.module.css';

const StyledLink = styled(NavLink)`
  color: white;

  &.active {
    color: orange;
  }
`;

const Layout = () => {
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
      <main>
        <Outlet />
      </main>
      <footer>Footer</footer>
    </div>
  );
};
export default Layout;
