import './Register.css';
import React from 'react';
import Logo from '../Logo/Logo';
import { NavLink } from 'react-router-dom';
import AuthForm from '../AuthForm/AuthForm';
import constants from '../../utils/constants/constants';
import useFormWithValidation from '../../hooks/useFormWithValidation';

const Register = ({ onRegister, formErrorText, registerButtonText }) => {
  const { values, handleChange, errors, isValid } = useFormWithValidation({});

  const handleSubmit = (evt) => {
    evt.preventDefault();

    onRegister({
      name: values.name,
      email: values.email,
      password: values.password,
    });
  };

  return (
    <main className="register">
      <Logo />
      <h1 className="register__title">Добро пожаловать!</h1>
      <AuthForm
        buttonText={registerButtonText}
        onSubmit={handleSubmit}
        errorText={formErrorText}
        isValid={isValid}
      >
        <div className="form-field">
          <label className="form-field__label" htmlFor="name">
            Имя
          </label>
          <input
            className="form-field__input"
            name="name"
            type="text"
            id="name"
            value={values.name || ''}
            onChange={handleChange}
            pattern="^[А-яёA-z\-\s]{2,30}$"
            required
          />
          <span className="form-field__error">
            {errors.name && constants.messages.nameRequirement}
          </span>
        </div>
        <div className="form-field">
          <label className="form-field__label" htmlFor="email">
            E-mail
          </label>
          <input
            className="form-field__input"
            name="email"
            type="email"
            id="email"
            value={values.email || ''}
            onChange={handleChange}
            pattern="\S+@\S+\.\S+"
            required
          />
          <span className="form-field__error">
            {errors.email && constants.messages.emailRequirement}
          </span>
        </div>
        <div className="form-field">
          <label className="form-field__label" htmlFor="password">
            Пароль
          </label>
          <input
            className="form-field__input"
            name="password"
            type="password"
            id="password"
            value={values.password || ''}
            minLength="6"
            onChange={handleChange}
            required
          />
          <span className="form-field__error">
            {errors.password && constants.messages.passwordRequirement}
          </span>
        </div>
      </AuthForm>
      <p className="register__question">
        Уже зарегистрированы?
        <NavLink className="register__button" to="/signin">
          Войти
        </NavLink>
      </p>
    </main>
  );
};

export default Register;
