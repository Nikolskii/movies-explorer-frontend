import React from 'react';
import { NavLink } from 'react-router-dom';
import ProfileLink from '../ProfileLink/ProfileLink';

import './Navigation.css';

const Navigation = () => {
  return (
    <nav className="navigation">
      <ul className="navigation__links">
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
      </ul>
    </nav>
  );
};

export default Navigation;
