import Logo from '../Logo/Logo';
import Navigation from '../Navigation/Navigation';
import './Header.css';

const Header = ({ place }) => {
  return (
    <header className={`header ${place === 'main' && 'header_place_main'}`}>
      <Logo />
      <Navigation />
    </header>
  );
};

export default Header;
