import './FormField.css';

const FormField = ({ labelText, type, name, onChange }) => {
  return (
    <div className="form-field">
      <label className="form-field__label" htmlFor={name}>
        {labelText}
      </label>
      <input
        className="form-field__input"
        type={type}
        id={name}
        onChange={(evt) => {
          onChange(evt.target.value);
        }}
      />
    </div>
  );
};

export default FormField;
