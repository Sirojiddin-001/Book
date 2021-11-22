import React from "react";

const Button = ({ children,className, ...props }) => {
  return (
    <div className="uk-margin-medium-top">
      <button
        {...props}
        type="button"
        className={`uk-button uk-width-1-1 book-primary-btn ${className}`}
      >
        {children}
      </button>
    </div>
  );
};

export default Button;
