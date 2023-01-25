import Logo from '../Logo/Logo';
import Navigation from '../Navigation/Navigation';
import './Header.css';

const Header = ({ place, children }) => {
  return (
    <header className={`header ${place === 'main' && 'header_place_main'}`}>
      <Logo />
      {children ? (
        children
      ) : (
        <>
          <Navigation />
          <button className="header__burger-button" />
        </>
      )}
    </header>
  );
};

export default Header;
