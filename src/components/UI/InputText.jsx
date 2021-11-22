import React from "react";

const InputText = ({ label, touched, errors, ...props }) => {
  return (
    <div className="uk-margin">
      <label className="uk-form-label uk-text-dark" htmlFor={props.name}>
        {label}
      </label>
      <div className="uk-form-controls">
        <input
          className={`uk-input text-sm rounded ${
            touched && errors ? "uk-form-danger" : "uk-form-light"
          }`}
          {...props}
        />
      </div>
      {touched && errors && (
        <span className="text-sm uk-text-danger">{errors}</span>
      )}
    </div>
  );
};

export default InputText;
