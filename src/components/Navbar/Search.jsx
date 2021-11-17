import React from "react";
import { LgToXl, XSmAngBelow, SmToLg } from "../../hooks/useMedia";

const Search = () => {
  return (
    <div>
      <LgToXl>
        <form className="uk-search uk-search-default">
          <a href="#search" className="uk-search-icon-flip search-input-icon">
            <i className="icon far fa-search"></i>
          </a>

          <input
            className="book-input uk-search-input"
            type="search"
            placeholder="Search"
          />
        </form>
      </LgToXl>

      <SmToLg>
        <a
          className="uk-navbar-toggle pr-0"
          uk-toggle="target: .nav-overlay; animation: uk-animation-fade"
          href="#search"
        >
          <div className="search-btn">
            <span className="far fa-lg fa-search"></span>
          </div>
        </a>
      </SmToLg>


      <XSmAngBelow>
        <a
          className="uk-navbar-toggle search-btn-m"
          uk-toggle="target: .nav-overlay; animation: uk-animation-fade"
          href="#search"
        >
          <span className="far fa-search"></span>
        </a>
      </XSmAngBelow>
    </div>
  );
};

export default Search;
