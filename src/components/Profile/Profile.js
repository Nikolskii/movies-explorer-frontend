import Header from '../Header/Header';
import CurrentUserContext from '../../context/CurrentUserContext';
import './Profile.css';
import React, { useEffect, useState, useCallback } from 'react';

const validator = () => {
  // true if error,
  // false if correct
};

const validators = {
  userName: {
    required: (value) => {
      return value === '';
    },
    minLength: (value) => {
      return value.length < 3;
    },
  },
  userEmail: {
    required: (value) => {
      return value === '';
    },
    minLength: (value) => {
      return value.length < 5;
    },
    containNumbers: (value) => {
      return !/[0-9]/.test(value);
    },
  },
};

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

  const [errors, setErrors] = useState({
    userName: {
      required: true,
      minLength: true,
    },
    userEmail: {
      required: true,
      minLength: true,
      containNumbers: true,
    },
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
      const { userName, userEmail } = formValues;

      const userNameValidationResult = Object.keys(validators.userName)
        .map((errorKey) => {
          const errorResult = validators.userName[errorKey](userName);
          return { [errorKey]: errorResult };
        })
        .reduce((acc, el) => ({ ...acc, ...el }), {});

      const userEmailValidationResult = Object.keys(validators.userEmail)
        .map((errorKey) => {
          const errorResult = validators.userEmail[errorKey](userEmail);
          return { [errorKey]: errorResult };
        })
        .reduce((acc, el) => ({ ...acc, ...el }), {});

      setErrors({
        userName: userNameValidationResult,
        userEmail: userEmailValidationResult,
      });
    },
    [formValues, setErrors],
  );

  const { userName, userEmail } = formValues;

  const isUserNameInvalid = Object.values(errors.userName).some(Boolean);
  const isUserEmailInvalid = Object.values(errors.userEmail).some(Boolean);

  const isSubmitDisabled = isUserNameInvalid || isUserEmailInvalid;

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
                // value={name || ''}
                // onChange={(evt) => setName(evt.target.value)}
                value={userName}
                onChange={handleInputChange}
              />
            </div>
            {errors.userName.required && <p>Required</p>}
            {errors.userName.minLength && <p>Min length is 3</p>}
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
            {errors.userEmail.required && <p>Required</p>}
            {errors.userEmail.minLength && <p>Min length is 3</p>}
            {errors.userEmail.containNumbers && <p>Must contain numbers</p>}
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
