import './FormField.css';

const FormField = ({ labelText, inputType, inputId }) => {
  return (
    <div className="form-field">
      <label className="form-field__label" for={inputId}>
        {labelText}
      </label>
      <input
        className="form-field__input"
        type={inputType}
        id={inputId}
        placeholder="Плейсхолдер"
      />
    </div>
  );
};

export default FormField;
