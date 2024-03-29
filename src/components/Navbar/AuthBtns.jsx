import React from "react";
import { SmToXl } from "../../hooks/useMedia";
import { useTranslation } from "react-i18next";
import { useNavigate } from "react-router-dom";

const AuthBtns = () => {
  const { t } = useTranslation();
  const navigator = useNavigate();

  return (
    !localStorage.getItem("user") ?
      <SmToXl>
        <button
          onClick={() => {
            navigator("/login");
          }}
          className="uk-button book-primary-btn-o ml-3"
        >
          {t("sign_in")}
        </button>
        <button
          onClick={() => {
            navigator("/register");
          }}
          className="uk-button book-primary-btn ml-3"
        >
          {t("sign_up")}
        </button>
      </SmToXl> : null
  );
};

export default AuthBtns;
