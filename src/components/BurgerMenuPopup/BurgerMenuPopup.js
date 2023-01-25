import Navigation from '../Navigation/Navigation';
import './BurgerMenuPopup.css';

const BurgerMenuPopup = ({ isOpen, onBurgerMenu }) => {
  return (
    <section
      className={`burger-menu-popup ${isOpen && 'burger-menu-popup_opened'}`}
    >
      <div className="burger-menu-popup__container">
        <button
          className="burger-menu-popup__close-button"
          onClick={onBurgerMenu}
        />
        <div className="burger-menu-popup__navigation"></div>
        <Navigation isVisibleOnBurgerMenu />
      </div>
    </section>
  );
};

export default BurgerMenuPopup;
