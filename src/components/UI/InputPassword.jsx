import React, { useState } from "react";
import { NavLink } from "react-router-dom";

const InputPassword = ({ fp = false, touched, errors, ...props }) => {
  const [isVisible, setIsVisible] = useState(false);

  return (
    <div className="uk-margin">
      <div className="d-flex justify-content-between">
        <label className="uk-form-label uk-text-dark" htmlFor={props.name}>
          Password
        </label>
        {fp && (
          <NavLink
            to="/forgotPassword"
            className="uk-form-label text-primary font-semibold"
          >
            Forgot password?
          </NavLink>
        )}
      </div>

      <div className="uk-form-controls">
        <div className="uk-inline uk-width-1-1">
          <a
            href="##"
            className="uk-form-icon uk-form-icon-flip book-form-icon"
            onClick={() => {
              setIsVisible(!isVisible);
            }}
          >
            <i className={`fa ${isVisible ? "fa-eye-slash" : "fa-eye"} ${touched && errors ? "text-danger" : " "
              }`}></i>
          </a>
          <input
            className={`uk-input book-input ${touched && errors ? "uk-form-danger" : "uk-form-light"
              }`}
            type={isVisible ? "text" : "password"}
            placeholder="Enter password"
            {...props}
          />
        </div>
      </div>
      {touched && errors && (
        <span className="uk-text-small text-danger">{errors}</span>
      )}
    </div>
  );
};

export default InputPassword;
