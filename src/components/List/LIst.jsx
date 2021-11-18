import React from "react";
import { LgToXl } from "../../hooks/useMedia";
import { useTranslation } from "react-i18next";

const List = () => {
  const { t } = useTranslation();

  return (
    <LgToXl>
      <div className="uk-width-1-3">
        <ul data-uk-accordion className="category-list">
          <li className="uk-open">
            <a className="uk-accordion-title" href="#books">
              {t("books")}
            </a>
            <div className="uk-accordion-content">
              <ul className="uk-nav uk-nav-default">
                <li>
                  <a href="#">Item</a>
                </li>
                <li>
                  <a href="#">Item</a>
                </li>
                <li>
                  <a href="#">Item</a>
                </li>
              </ul>
            </div>
          </li>
          <li>
            <a className="uk-accordion-title" href="#">
              {t("audio_books")}
            </a>
            <div className="uk-accordion-content">
              <p>
                Ut enim ad minim veniam, quis nostrud exercitation ullamco
                laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure
                dolor reprehenderit.
              </p>
            </div>
          </li>
        </ul>
      </div>
    </LgToXl>
  );
};

export default List;
