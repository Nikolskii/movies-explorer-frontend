import AuthLinks from '../AuthLinks/AuthLinks';
import Logo from '../Logo/Logo';
import Navigation from '../Navigation/Navigation';
import './Header.css';

const Header = ({ place, onBurgerMenu, isLoggedIn }) => {
  return (
    <header className={`header ${place === 'main' && 'header_place_main'}`}>
      <Logo />
      {isLoggedIn ? (
        <>
          <Navigation place={place} />
          <button className="header__burger-button" onClick={onBurgerMenu} />
        </>
      ) : (
        <AuthLinks />
      )}
    </header>
  );
};

export default Header;
