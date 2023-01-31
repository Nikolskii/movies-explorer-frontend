import Navigation from '../Navigation/Navigation';
import './BurgerMenuPopup.css';

const BurgerMenuPopup = ({ isOpen, onClose }) => {
  return (
    <section
      className={`burger-menu-popup ${isOpen && 'burger-menu-popup_opened'}`}
    >
      <div className="burger-menu-popup__container">
        <button className="burger-menu-popup__close-button" onClick={onClose} />
        <div className="burger-menu-popup__navigation"></div>
        <Navigation isVisibleOnBurgerMenu onClose={onClose} />
      </div>
    </section>
  );
};

export default BurgerMenuPopup;
