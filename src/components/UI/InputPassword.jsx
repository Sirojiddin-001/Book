import React, { useState } from "react";
import { NavLink } from "react-router-dom";

const InputPassword = ({ fp = false, touched, errors, ...props }) => {
  const [isVisible, setIsVisible] = useState(false);

  return (
    <div className="uk-margin">
      <div className="flex justify-between">
        <label className="uk-form-label uk-text-dark" htmlFor={props.name}>
          Password
        </label>
        {fp && (
          <NavLink
            to="/forgotPassword"
            className="uk-form-label text-blue-600 font-semibold"
          >
            Forgot password?
          </NavLink>
        )}
      </div>

      <div className="uk-form-controls">
        <div className="uk-inline w-full">
          <a
            href="##"
            className="uk-form-icon uk-form-icon-flip hover:no-underline hover:text-gray-700 transition-colors ease-in-out duration-200"
            onClick={() => {
              setIsVisible(!isVisible);
            }}
          >
            <i className={`fa ${isVisible ? "fa-eye-slash" : "fa-eye"}`}></i>
          </a>
          <input
            className={`uk-input text-sm rounded ${
              touched && errors ? "uk-form-danger" : "uk-form-light"
            }`}
            type={isVisible ? "text" : "password"}
            placeholder="Enter password"
            {...props}
          />
        </div>
      </div>
      {touched && errors && (
        <span className="text-sm uk-text-danger">{errors}</span>
      )}
    </div>
  );
};

export default InputPassword;
