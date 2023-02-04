import './Profile.css';
import Header from '../Header/Header';
import React, { useEffect, useState } from 'react';
import constants from '../../utils/constants/constants';
import CurrentUserContext from '../../context/CurrentUserContext';
import useFormWithValidation from '../../hooks/useFormWithValidation';

const Profile = ({
  onBurgerMenu,
  isLoggedIn,
  onUpdateUser,
  onSignout,
  updateUserButtonText,
}) => {
  const currentUser = React.useContext(CurrentUserContext);
  const { values, handleChange, errors, isValid } = useFormWithValidation({});
  const [isNewData, setIsNewData] = useState(null);

  console.log(values.name);
  console.log(currentUser.name);
  console.log(values.email);
  console.log(currentUser.email);

  useEffect(() => {
    setIsNewData(true);
    if (
      (values.name === currentUser.name && !values.email) ||
      (values.email === currentUser.email && !values.name)
    ) {
      setIsNewData(false);
    }

    if (
      values.name === currentUser.name &&
      values.email === currentUser.email
    ) {
      setIsNewData(false);
    }
  }, [
    values.name,
    values.email,
    currentUser.name,
    currentUser.email,
    isNewData,
  ]);

  const handleSubmit = (evt) => {
    evt.preventDefault();

    onUpdateUser({
      name: values.name || currentUser.name,
      email: values.email || currentUser.email,
    });
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
                name="name"
                type="text"
                id="name"
                defaultValue={values.name || currentUser.name || ''}
                onChange={handleChange}
                pattern="^[А-яёA-z\-\s]{2,30}$"
                required
              />
              <span className="profile-form_error">
                {errors.name && constants.messages.nameRequirement}
              </span>
            </div>
            <div className="profile-form__field">
              <label className="profile-form__label" htmlFor="email">
                E-mail
              </label>
              <input
                className="profile-form__input"
                name="email"
                type="email"
                id="email"
                defaultValue={values.email || currentUser.email || ''}
                onChange={handleChange}
                pattern="\S+@\S+\.\S+"
                required
              />
              <span className="profile-form_error">
                {errors.email && constants.messages.emailRequirement}
              </span>
            </div>
          </fieldset>
          <button
            disabled={!isValid || !isNewData}
            type="submit"
            className={`profile_form__button ${
              (!isValid || !isNewData) && 'profile_form__button_inactive'
            }`}
          >
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
