import './Header.css';
import Logo from '../Logo/Logo';
import AuthLinks from '../AuthLinks/AuthLinks';
import Navigation from '../Navigation/Navigation';

const Header = ({ place, onBurgerMenu, isLoggedIn }) => {
  return (
    <header className={`header ${place === 'main' && 'header_place_main'}`}>
      <Logo />
      {isLoggedIn ? (
        <>
          <Navigation place={place} />
          <button
            className={`header__burger-button ${
              place === 'main' && 'header__burger-button_place_main'
            }`}
            onClick={onBurgerMenu}
          />
        </>
      ) : (
        <AuthLinks />
      )}
    </header>
  );
};

export default Header;
