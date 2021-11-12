import React from "react";

const Navbar = () => {
  return (
    <nav className="uk-navbar-container" uk-navbar="mode: click">
      <div className="uk-navbar-left">
        <a
          className="uk-navbar-item uk-logo uk-text-bold uk-text-uppercase"
          href="#logo"
        >
          Logo
        </a>
      </div>

      <div className="uk-navbar-right">
        <button className="uk-button book-primary-btn-o mr-3">Sign Up</button>
        <button className="uk-button book-primary-btn mr-3">Sign In</button>
      </div>
    </nav>
  );
};

export default Navbar;
