import './FormField.css';

const FormField = ({ labelText, type, name }) => {
  return (
    <div className="form-field">
      <label className="form-field__label" htmlFor={name}>
        {labelText}
      </label>
      <input className="form-field__input" type={type} id={name} />
    </div>
  );
};

export default FormField;
