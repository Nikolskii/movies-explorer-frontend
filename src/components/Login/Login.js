import AuthForm from '../AuthForm/AuthForm';
import FormField from '../FormField/FormField';
import Logo from '../Logo/Logo';
import './Login.css';

const Login = () => {
  return (
    <section className="login">
      <Logo />
      <h1 className="login__title">Рады видеть!</h1>
      <AuthForm buttonText="Войти" place="login">
        <FormField labelText="E-mail" type="text" name="email" />
        <FormField labelText="Пароль" type="password" name="password" />
      </AuthForm>
      <p className="login__question">
        Ещё не зарегистрированы?
        <button className="login__button">Регистрация</button>
      </p>
    </section>
  );
};

export default Login;