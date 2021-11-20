import React from "react";
import ReactCountryFlag from "react-country-flag";
import { SmToXl, XSmAngBelow } from "../../hooks/useMedia";
import { useTranslation } from "react-i18next";

const Content = () => {
  const { i18n } = useTranslation();
  const changeLanguage = (language) => {
    i18n.changeLanguage(language).then(() => {
      localStorage.setItem("language", language);
    });
  };

  return (
    <ul className="uk-nav uk-dropdown-nav language-select">
      <li className="uk-nav-header">Change language</li>

      <li className={i18n.language === "uz" ? "active" : ""}>
        <a
          href="#uz"
          onClick={() => {
            changeLanguage("uz");
          }}
        >
          <ReactCountryFlag countryCode="UZ" svg />
          <span>UZ</span>
        </a>
      </li>

      <li className={i18n.language === "ru" ? "active" : ""}>
        <a
          href="#ru"
          onClick={() => {
            changeLanguage("ru");
          }}
        >
          <ReactCountryFlag countryCode="RU" svg />
          <span>RU</span>
        </a>
      </li>
    </ul>
  );
};

const Language = () => {
  const { i18n } = useTranslation();

  return (
    <>
      <SmToXl>
        <div className="ml-3">
          <span className="language">
            <ReactCountryFlag countryCode={i18n.language} svg />
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
            <ReactCountryFlag countryCode={i18n.language} svg />
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
