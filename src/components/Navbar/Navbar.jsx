import React from "react";
import Search from "./Search";
import Language from "./Language";
import AuthBtns from "./AuthBtns";
import Logo from "./Logo";
import { useTranslation } from "react-i18next";
import { SmToXl, SmToLg, XSmAngBelow } from "../../hooks/useMedia";
import Profile from "./Profile";
const data = JSON.parse(localStorage.getItem("user"));

const Navbar = () => {
  const { t } = useTranslation();

  return (
    <nav
      className="uk-background-default book-navbar"
      uk-navbar="mode: click"
      data-uk-sticky
    >
      <div className="container d-flex px-0">
        <div className="nav-overlay uk-navbar-left">
          <XSmAngBelow>
            <div className="uk-navbar-item" uk-toggle="target: #vertical-menu">
              <span className="far fa-bars search-btn-m"></span>
            </div>
          </XSmAngBelow>

          <SmToLg>
            <div
              className="menu-btn mr-3"
              tabIndex="0"
              uk-toggle="target: #vertical-menu"
            >
              <span className="far fa-bars"></span>
            </div>
          </SmToLg>

          <SmToXl>
            <Logo />
          </SmToXl>
        </div>

        <XSmAngBelow>
          <div className="nav-overlay uk-navbar-center">
            <Logo />
          </div>
        </XSmAngBelow>

        <div className="nav-overlay uk-navbar-right">
          <Search />

          <Language />
          {data ? <Profile /> : <AuthBtns />}
        </div>

        <div className="nav-overlay uk-navbar-left uk-flex-1" hidden>
          <div className="uk-navbar-item uk-width-expand">
            <form className="uk-search uk-search-navbar uk-width-1-1">
              <input
                className="uk-search-input"
                type="search"
                placeholder={t("search")}
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
