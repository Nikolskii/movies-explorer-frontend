import { NavLink } from 'react-router-dom';
import './AuthLinks.css';

const AuthLinks = () => {
  return (
    <nav className="auth-links">
      <ul className="auth-links__list">
        <li>
          <NavLink className="auth-links__link" to="/signup">
            Регистрация
          </NavLink>
        </li>
        <li>
          <NavLink className="auth-links__button" to="/signin">
            Войти
          </NavLink>
        </li>
      </ul>
    </nav>
  );
};

export default AuthLinks;
