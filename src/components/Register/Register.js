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
        <FormField />
      </AuthForm>
    </section>
  );
};

export default Register;
