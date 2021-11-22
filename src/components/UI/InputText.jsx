import React from "react";

const InputText = ({ label, touched, errors, ...props }) => {
  return (
    <div className="uk-margin">
      <label className="uk-form-label uk-text-dark" htmlFor={props.name}>
        {label}
      </label>
      <div className="uk-form-controls">
        <input
          className={`uk-input book-input ${
            touched && errors ? "uk-form-danger" : "uk-form-light"
          }`}
          {...props}
        />
      </div>
      {touched && errors && (
        <span className="uk-text-small text-danger">{errors}</span>
      )}
    </div>
  );
};

export default InputText;
