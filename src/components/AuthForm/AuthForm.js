import './AuthForm.css';

const AuthForm = ({ children, buttonText, place }) => {
  return (
    <form className="auth-form">
      <fieldset className="auth-form__fieldset">{children}</fieldset>
      <button
        className={`auth-form__button ${
          place === 'login' && 'auth-form__button_place_login'
        }`}
        type="submit"
      >
        {buttonText}
      </button>
    </form>
  );
};

export default AuthForm;
