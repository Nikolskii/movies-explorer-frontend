import React from 'react';
import { NavLink } from 'react-router-dom';
import { LoggedInContext } from '../../contexts/LoggedInContext';
import './Navigation.css';

const Navigation = ({ place }) => {
  const loggedIn = React.useContext(LoggedInContext);

  console.log(place);

  return (
    <nav className="navigation">
      <ul className="navigation__links">
        <li>
          <NavLink
            className={`navigation_link ${
              place === 'main' && 'navigation_link_place_main'
            }`}
            to="/signup"
          >
            Регистрация
          </NavLink>
        </li>
        <li>
          <NavLink
            className="navigation_link navigation_link-button"
            to="/signin"
          >
            Войти
          </NavLink>
        </li>
      </ul>
    </nav>
  );
};

export default Navigation;
