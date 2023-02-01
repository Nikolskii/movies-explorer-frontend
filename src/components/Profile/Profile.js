import Header from '../Header/Header';
import CurrentUserContext from '../../context/CurrentUserContext';
import './Profile.css';
import React, { useEffect, useState } from 'react';
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
  const { name, email } = currentUser;
  const [isNewData, setIsNewData] = useState(null);

  useEffect(() => {
    values.name === name && values.email === email
      ? setIsNewData(false)
      : setIsNewData(true);
  }, [name, email, values.name, values.email]);

  const handleSubmit = (evt) => {
    evt.preventDefault();

    onUpdateUser({ name: values.name, email: values.email });
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
                placeholder={name}
                value={values.name || ''}
                onChange={handleChange}
                pattern="^[А-яёA-z\-\s]{2,30}$"
                required
              />
              <span className="profile-form_error">
                {errors.name &&
                  'Поле может содержать только латиницу, кириллицу, пробел или дефис от 2 до 30 знаков'}
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
                placeholder={email}
                value={values.email || ''}
                onChange={handleChange}
                pattern="\S+@\S+\.\S+"
                required
              />
              <span className="profile-form_error">
                {errors.email && 'Введен некорреткный e-mail адрес'}
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
