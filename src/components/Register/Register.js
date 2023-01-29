import React, { useEffect, useState } from 'react';
import { NavLink } from 'react-router-dom';
import AuthForm from '../AuthForm/AuthForm';
import FormField from '../FormField/FormField';
import Logo from '../Logo/Logo';
import './Register.css';

const Register = ({ onRegister, formErrorText, registerButtonText }) => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (evt) => {
    evt.preventDefault();

    onRegister({ name, email, password });
  };

  const handleNameChange = (name) => {
    setName(name);
  };

  const handleEmailChange = (email) => {
    setEmail(email);
  };

  const handlePasswordChange = (password) => {
    setPassword(password);
  };

  return (
    <main className="register">
      <Logo />
      <h1 className="register__title">Добро пожаловать!</h1>
      <AuthForm
        buttonText={registerButtonText}
        onSubmit={handleSubmit}
        errorText={formErrorText}
      >
        <FormField
          labelText="Имя"
          type="text"
          name="name"
          onChange={handleNameChange}
        />
        <FormField
          labelText="E-mail"
          type="text"
          name="email"
          onChange={handleEmailChange}
        />
        <FormField
          labelText="Пароль"
          type="password"
          name="password"
          onChange={handlePasswordChange}
        />
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
