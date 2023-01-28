import './AuthForm.css';

const AuthForm = ({ children, buttonText, place, onSubmit }) => {
  return (
    <form className="auth-form" onSubmit={onSubmit}>
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
