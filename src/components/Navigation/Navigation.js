import './Navigation.css';
import React from 'react';
import { NavLink } from 'react-router-dom';
import ProfileLink from '../ProfileLink/ProfileLink';

const Navigation = ({ isVisibleOnBurgerMenu, place, onClose }) => {
  return (
    <nav
      className={`navigation ${
        isVisibleOnBurgerMenu && 'navigation_on-burger-menu'
      }`}
    >
      <ul className="navigation__links">
        {isVisibleOnBurgerMenu && (
          <li className="navigation__links-item" onClick={onClose}>
            <NavLink
              className={({ isActive }) =>
                isActive
                  ? 'navigation__link navigation__link_active'
                  : 'navigation__link'
              }
              to="/"
            >
              Главная
            </NavLink>
          </li>
        )}
        <li className="navigation__links-item" onClick={onClose}>
          <NavLink
            className={({ isActive }) =>
              isActive
                ? `navigation__link navigation__link_active`
                : `navigation__link ${
                    place === 'main' && 'navigation__link_place_main'
                  }`
            }
            to="/movies"
          >
            Фильмы
          </NavLink>
        </li>
        <li className="navigation__links-item" onClick={onClose}>
          <NavLink
            className={({ isActive }) =>
              isActive
                ? 'navigation__link navigation__link_active'
                : `navigation__link ${
                    place === 'main' && 'navigation__link_place_main'
                  }`
            }
            to="/saved-movies"
          >
            Сохранённые фильмы
          </NavLink>
        </li>
        <li className="navigation__links-item" onClick={onClose}>
          <NavLink
            className={({ isActive }) =>
              isActive
                ? 'navigation__link navigation__link_active'
                : `navigation__link ${
                    place === 'main' && 'navigation__link_place_main'
                  }`
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
