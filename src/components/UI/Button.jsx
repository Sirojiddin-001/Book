import React from "react";

const Button = ({ children,className, ...props }) => {
  return (
    <div className="uk-margin-medium-top">
      <button
        {...props}
        type="button"
        className={`uk-button w-full bg-blue-600 hover:bg-blue-700 rounded normal-case font-semibold text-white transition ease-in-out duration-200 border border-blue-800 ${className}`}
      >
        {children}
      </button>
    </div>
  );
};

export default Button;
