import React from "react";
import { LgToXl, XSmAngBelow } from "../../hooks/useMedia";

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

      <XSmAngBelow>
        <a
          className="uk-navbar-toggle"
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
