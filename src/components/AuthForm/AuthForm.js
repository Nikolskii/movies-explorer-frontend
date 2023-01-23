import './AuthForm.css';

const AuthForm = ({ children, buttonText }) => {
  return (
    <form className="auth-form">
      <fieldset className="auth-form__fieldset">{children}</fieldset>
      <button className="auth-form__button" type="submit">
        {buttonText}
      </button>
    </form>
  );
};

export default AuthForm;
