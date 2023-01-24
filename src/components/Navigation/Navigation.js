import React from 'react';
import { NavLink } from 'react-router-dom';
import { LoggedInContext } from '../../contexts/LoggedInContext';
import ProfileLink from '../ProfileLink/ProfileLink';

import './Navigation.css';

const Navigation = () => {
  const loggedIn = React.useContext(LoggedInContext);

  const links = loggedIn ? (
    <>
      <li className="navigation__links-item">
        <NavLink
          className={({ isActive }) =>
            isActive
              ? 'navigation__link navigation__link_active'
              : 'navigation__link'
          }
          to="/movies"
        >
          Фильмы
        </NavLink>
      </li>
      <li className="navigation__links-item">
        <NavLink
          className={({ isActive }) =>
            isActive
              ? 'navigation__link navigation__link_active'
              : 'navigation__link'
          }
          to="/saved-movies"
        >
          Сохранённые фильмы
        </NavLink>
      </li>
      <li className="navigation__links-item">
        <NavLink
          className={({ isActive }) =>
            isActive
              ? 'navigation__link navigation__link_active'
              : 'navigation__link'
          }
          to="/profile"
        >
          Аккаунт
          <ProfileLink />
        </NavLink>
      </li>
    </>
  ) : (
    <>
      <li className="navigation__links-item-on-auth">
        <NavLink className="navigation__on-auth-link" to="/signup">
          Регистрация
        </NavLink>
      </li>
      <li className="navigation__links-item-on-auth">
        <NavLink className="navigation__on-auth-button" to="/signin">
          Войти
        </NavLink>
      </li>
    </>
  );

  return (
    <nav className="navigation">
      <ul className="navigation__links">{links}</ul>
    </nav>
  );
};

export default Navigation;
