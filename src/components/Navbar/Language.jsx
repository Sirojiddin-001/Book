import React from "react";
import ReactCountryFlag from "react-country-flag";
import { SmToXl, XSmAngBelow } from "../../hooks/useMedia";

const Content = () => {
  return (
    <ul className="uk-nav uk-dropdown-nav language-select">
      <li className="uk-nav-header">Change language</li>

      <li className="active">
        <a href="#uz">
          <ReactCountryFlag countryCode="UZ" svg />
          <span>UZ</span>
        </a>
      </li>

      <li>
        <a href="#ru">
          <ReactCountryFlag countryCode="RU" svg />
          <span>RU</span>
        </a>
      </li>
    </ul>
  )
}

const Language = () => {
  return (
    <>
      <SmToXl>
        <div className="ml-3">
          <span className="language">
            <ReactCountryFlag countryCode="UZ" svg />
          </span>

          <div
            className="uk-border-rounded bg-100"
            uk-dropdown="mode: click; boundary: .language"
          >
            <Content />
          </div>
        </div>

        <div className="v-divider ml-3"></div>
      </SmToXl>

      <XSmAngBelow>
        <div className="ml-1 mr-3">
          <span className="language-m">
            <ReactCountryFlag countryCode="UZ" svg />
          </span>

          <div
            className="uk-border-rounded bg-100"
            uk-dropdown="mode: click; boundary: .language-m; pos: top-right"
          >
            <Content />
          </div>
        </div>
      </XSmAngBelow>
    </>
  );
};

export default Language;
