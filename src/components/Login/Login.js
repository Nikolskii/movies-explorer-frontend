import './Login.css';
import Logo from '../Logo/Logo';
import { NavLink } from 'react-router-dom';
import AuthForm from '../AuthForm/AuthForm';
import constants from '../../utils/constants/constants';
import useFormWithValidation from '../../hooks/useFormWithValidation';

const Login = ({ onLogin, formErrorText, loginButtonText }) => {
  const { values, handleChange, errors, isValid } = useFormWithValidation({});

  const handleSubmit = (evt) => {
    evt.preventDefault();

    onLogin({ email: values.email, password: values.password });
  };

  return (
    <main className="login">
      <Logo />
      <h1 className="login__title">Рады видеть!</h1>
      <AuthForm
        buttonText={loginButtonText}
        onSubmit={handleSubmit}
        errorText={formErrorText}
        isValid={isValid}
        place="login"
      >
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
