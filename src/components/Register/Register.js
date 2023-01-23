import AuthForm from '../AuthForm/AuthForm';
import FormField from '../FormField/FormField';
import Logo from '../Logo/Logo';
import './Register.css';

const Register = () => {
  return (
    <section className="register">
      <Logo />
      <h1 className="register__title">Добро пожаловать!</h1>
      <AuthForm buttonText="Зарегистрироваться">
        <FormField labelText="Имя" type="text" name="name" />
        <FormField labelText="E-mail" type="text" name="email" />
        <FormField labelText="Пароль" type="password" name="password" />
      </AuthForm>
      <p className="register__question">
        Уже зарегистрированы?
        <button className="register__button">Войти</button>
      </p>
    </section>
  );
};

export default Register;
