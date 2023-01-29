import { useState } from 'react';
import { NavLink } from 'react-router-dom';
import AuthForm from '../AuthForm/AuthForm';
import FormField from '../FormField/FormField';
import Logo from '../Logo/Logo';
import './Login.css';

const Login = ({ onLogin, formErrorText, loginButtonText }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (evt) => {
    evt.preventDefault();

    onLogin({ email, password });
  };

  const handleEmailChange = (email) => {
    setEmail(email);
  };

  const handlePasswordChange = (password) => {
    setPassword(password);
  };

  return (
    <main className="login">
      <Logo />
      <h1 className="login__title">Рады видеть!</h1>
      <AuthForm
        buttonText={loginButtonText}
        onSubmit={handleSubmit}
        errorText={formErrorText}
        place="login"
      >
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
      <p className="login__question">
        Ещё не зарегистрированы?
        <NavLink className="login__button" to="/signup">
          Регистрация
        </NavLink>
      </p>
    </main>
  );
};

export default Login;
