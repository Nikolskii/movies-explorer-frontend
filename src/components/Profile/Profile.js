import Header from '../Header/Header';
import CurrentUserContext from '../../context/CurrentUserContext';
import './Profile.css';
import React from 'react';

const Profile = ({ onBurgerMenu, isLoggedIn, onSignout }) => {
  const currentUser = React.useContext(CurrentUserContext);

  console.log(currentUser);
  return (
    <>
      <Header onBurgerMenu={onBurgerMenu} isLoggedIn={isLoggedIn} />
      <main className="profile">
        <h1 className="profile__title">{`Привет, ${currentUser.name}!`}</h1>
        <form className="profile-form">
          <fieldset className="profile-form__fieldset">
            <div className="profile-form__field">
              <label className="profile-form__label" htmlFor="name">
                Имя
              </label>
              <input
                className="profile-form__input"
                type="text"
                id="name"
                placeholder={currentUser.name}
              />
            </div>
            <div className="profile-form__field">
              <label className="profile-form__label" htmlFor="email">
                E-mail
              </label>
              <input
                className="profile-form__input"
                type="text"
                id="email"
                placeholder={currentUser.email}
              />
            </div>
          </fieldset>
          <button className="profile_form__button">Редактировать</button>
        </form>
        <button className="profile__button" onClick={onSignout}>
          Выйти из аккаунта
        </button>
      </main>
    </>
  );
};

export default Profile;
