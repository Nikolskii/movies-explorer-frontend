import Header from '../Header/Header';
import CurrentUserContext from '../../context/CurrentUserContext';
import './Profile.css';
import React, { useEffect, useState, useCallback } from 'react';

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

  const [formValues, setFormValues] = useState({
    userName: '',
    userEmail: '',
  });

  const [formValidity, setFormValidity] = useState({
    userNameValid: false,
    userEmailValid: false,
  });

  const handleInputChange = useCallback(
    (e) => {
      const { name, value } = e.target;
      setFormValues((prevState) => ({ ...prevState, [name]: value }));
    },
    [setFormValues],
  );

  useEffect(
    function validateInputs() {
      const isUserNameFilled = formValues.userName.length > 0;
      const isUserNameValid = isUserNameFilled;

      const isUserEmailFilled = formValues.userEmail.length > 3;
      const isUserEmailValid = isUserEmailFilled;

      setFormValidity((prevValidity) => ({
        userNameValid: isUserNameValid,
        userEmailValid: isUserEmailValid,
      }));
    },
    [formValues, setFormValidity],
  );

  const { userName, userEmail } = formValues;

  const { userNameValid, userEmailValid } = formValidity;

  const isSubmitDisabled = !userNameValid || !userEmailValid;

  return (
    <>
      <Header onBurgerMenu={onBurgerMenu} isLoggedIn={isLoggedIn} />
      <main className="profile">
        <h1 className="profile__title">{`Привет, ${currentUser.name}!`}</h1>
        {!userNameValid && <p>user name invalid</p>}
        {!userEmailValid && <p>user email invalid</p>}
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
                // value={name || ''}
                // onChange={(evt) => setName(evt.target.value)}
                value={userName}
                onChange={handleInputChange}
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
                // value={email || ''}
                // onChange={(evt) => setEmail(evt.target.value)}
                value={userEmail}
                onChange={handleInputChange}
              />
            </div>
          </fieldset>
          <button
            disabled={isSubmitDisabled}
            type="submit"
            className="profile_form__button"
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
