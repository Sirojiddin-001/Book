import React from "react";
import {SmToXl } from "../../hooks/useMedia";

const AuthBtns = () => {
  return (
    <SmToXl>
      <button className="uk-button book-primary-btn-o ml-3">Sign Up</button>
      <button className="uk-button book-primary-btn ml-3">Sign In</button>
    </SmToXl>
  );
};

export default AuthBtns;
