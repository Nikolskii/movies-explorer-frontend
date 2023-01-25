import Logo from '../Logo/Logo';
import Navigation from '../Navigation/Navigation';
import './Header.css';

const Header = ({ place, children, onBurgerMenu }) => {
  return (
    <header className={`header ${place === 'main' && 'header_place_main'}`}>
      <Logo />
      {children ? (
        children
      ) : (
        <>
          <Navigation />
          <button className="header__burger-button" onClick={onBurgerMenu} />
        </>
      )}
    </header>
  );
};

export default Header;
