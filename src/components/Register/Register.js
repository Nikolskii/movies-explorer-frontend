import { NavLink } from 'react-router-dom';
import AuthForm from '../AuthForm/AuthForm';
import FormField from '../FormField/FormField';
import Logo from '../Logo/Logo';
import './Register.css';

const Register = ({ onRegister }) => {
  return (
    <main className="register">
      <Logo />
      <h1 className="register__title">Добро пожаловать!</h1>
      <AuthForm buttonText="Зарегистрироваться">
        <FormField labelText="Имя" type="text" name="name" />
        <FormField labelText="E-mail" type="text" name="email" />
        <FormField labelText="Пароль" type="password" name="password" />
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
