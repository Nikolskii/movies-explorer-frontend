import './Logo.css';
import logoImg from '../../images/logo.svg';
import { NavLink } from 'react-router-dom';

const Logo = () => {
  return (
    <NavLink className="logo" to="/">
      <img className="logo__img" src={logoImg} alt="Логотип" />
    </NavLink>
  );
};

export default Logo;
