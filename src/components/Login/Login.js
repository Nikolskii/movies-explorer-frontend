import { NavLink } from 'react-router-dom';
import AuthForm from '../AuthForm/AuthForm';
import FormField from '../FormField/FormField';
import Logo from '../Logo/Logo';
import './Login.css';

const Login = () => {
  return (
    <main className="login">
      <Logo />
      <h1 className="login__title">Рады видеть!</h1>
      <AuthForm buttonText="Войти" place="login">
        <FormField labelText="E-mail" type="text" name="email" />
        <FormField labelText="Пароль" type="password" name="password" />
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
