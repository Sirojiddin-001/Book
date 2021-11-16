import React from "react";
import Search from "./Search";
import Language from "./Language";
import AuthBtns from "./AuthBtns";
import Logo from "./Logo";

const Navbar = () => {
  return (
    <nav className="uk-navbar-container" uk-navbar="mode: click">
      <div className="container d-flex px-0">
        <div className="nav-overlay uk-navbar-left">
          <Logo />
        </div>

        <div className="nav-overlay uk-navbar-right">
          <Search />

          <Language />

          <AuthBtns />
        </div>

        <div className="nav-overlay uk-navbar-left uk-flex-1" hidden>
          <div className="uk-navbar-item uk-width-expand">
            <form className="uk-search uk-search-navbar uk-width-1-1">
              <input
                className="uk-search-input"
                type="search"
                placeholder="Search"
                autoFocus
              />
            </form>
          </div>

          <a
            className="uk-navbar-toggle"
            data-uk-close
            uk-toggle="target: .nav-overlay; animation: uk-animation-fade"
            href="#close"
          >
            {" "}
          </a>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
