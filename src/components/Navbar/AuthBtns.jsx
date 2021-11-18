import React from "react";
import { SmToXl } from "../../hooks/useMedia";
import { useTranslation } from "react-i18next";

const AuthBtns = () => {
  const { t } = useTranslation();

  return (
    <SmToXl>
      <button className="uk-button book-primary-btn-o ml-3">{t("sign_in")}</button>
      <button className="uk-button book-primary-btn ml-3">{t("sign_up")}</button>
    </SmToXl>
  );
};

export default AuthBtns;
