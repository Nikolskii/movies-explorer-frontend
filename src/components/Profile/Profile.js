import Header from '../Header/Header';
import CurrentUserContext from '../../context/CurrentUserContext';
import './Profile.css';
import React, { useEffect, useState } from 'react';

const Profile = ({
  onBurgerMenu,
  isLoggedIn,
  onUpdateUser,
  onSignout,
  updateUserButtonText,
}) => {
  const currentUser = React.useContext(CurrentUserContext);
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');

  useEffect(() => {
    setName(currentUser.name);
    setEmail(currentUser.email);
  }, [currentUser]);

  const handleSubmit = (evt) => {
    evt.preventDefault();

    onUpdateUser({ name, email });
  };

  return (
    <>
      <Header onBurgerMenu={onBurgerMenu} isLoggedIn={isLoggedIn} />
      <main className="profile">
        <h1 className="profile__title">{`Привет, ${currentUser.name}!`}</h1>
        <form className="profile-form" onSubmit={handleSubmit}>
          <fieldset className="profile-form__fieldset">
            <div className="profile-form__field">
              <label className="profile-form__label" htmlFor="name">
                Имя
              </label>
              <input
                className="profile-form__input"
                name="userName"
                type="text"
                id="name"
                value={name || ''}
                onChange={(evt) => setName(evt.target.value)}
              />
            </div>
            <div className="profile-form__field">
              <label className="profile-form__label" htmlFor="email">
                E-mail
              </label>
              <input
                className="profile-form__input"
                name="userEmail"
                type="text"
                id="email"
                value={email || ''}
                onChange={(evt) => setEmail(evt.target.value)}
              />
            </div>
          </fieldset>
          <button type="submit" className="profile_form__button">
            {updateUserButtonText}
          </button>
        </form>
        <button className="profile__button" onClick={onSignout}>
          Выйти из аккаунта
        </button>
      </main>
    </>
  );
};

export default Profile;
