import './AuthForm.css';

const AuthForm = ({ children, buttonText, place, onSubmit, errorText }) => {
  return (
    <form className="auth-form" onSubmit={onSubmit}>
      <fieldset className="auth-form__fieldset">{children}</fieldset>
      <p className="auth-form__error">{errorText}</p>
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
