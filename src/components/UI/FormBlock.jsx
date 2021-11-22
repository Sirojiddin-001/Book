import React, { Fragment } from "react";
import { NavLink } from "react-router-dom";

const FormBlock = ({ title, bottomTitle, bottomText, url, to, children }) => {
  return (
    <div uk-height-viewport="expand: true" className="uk-width-1-3@m d-flex justify-content-center align-items-center uk-background-default">
      <div className="container">
        <h2 className="mt-20 mb-4 uk-text-dark font-semibold text-3xl">
          {title}
        </h2>
        {children}
        {bottomTitle && (
          <Fragment>
            <p className="my-3 text-gray-400 text-sm text-center">
              Easy {bottomTitle} with
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <button className="w-full uk-button uk-button-default uk-button-google rounded normal-case border-gray-300 font-semibold hover:bg-blue-50 transition ease-in-out duration-200"></button>
              </div>

              <div>
                <button className="w-full uk-button uk-button-default uk-button-facebook rounded normal-case border-gray-300 font-semibold hover:bg-blue-50 transition ease-in-out duration-200"></button>
              </div>
            </div>
          </Fragment>
        )}
        <p className="my-4 uk-text-dark text-sm text-center">
          {bottomText}
          <NavLink to={url} className="pl-1 font-semibold text-blue-600">
            {to}
          </NavLink>
        </p>
      </div>
    </div>
  );
};

export default FormBlock;
