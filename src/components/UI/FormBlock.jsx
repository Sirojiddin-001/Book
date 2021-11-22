import React, { Fragment } from "react";
import { NavLink } from "react-router-dom";

const FormBlock = ({ title, bottomTitle, bottomText, url, to, children }) => {
  return (
    <div data-uk-height-viewport className="login-form uk-width-1-3@l uk-width-1-2@m">
      <div className="login-block">
        <h2 className="mb-4 uk-text-dark uk-text-bold">
          {title}
        </h2>
        {children}
        {bottomTitle && (
          <Fragment>
            <p className="my-3 uk-text-small uk-text-center">
              Easy {bottomTitle} with
            </p>
            <div className="d-flex flex-column flex-md-row">
              <button className="uk-width-1-1 book-primary-btn-o uk-button uk-button-google">Google</button>
              <button className="ml-md-3 mt-3 mt-md-0 uk-width-1-1 book-primary-btn uk-button uk-button-facebook">Facebook</button>
            </div>
          </Fragment>
        )}
        <p className="my-4 uk-text-dark uk-text-small uk-text-center">
          {bottomText}
          <NavLink to={url} className="pl-1 font-semibold text-blue">
            {to}
          </NavLink>
        </p>
      </div>
    </div>
  );
};

export default FormBlock;
