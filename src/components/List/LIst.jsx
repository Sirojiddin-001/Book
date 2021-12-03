import React from "react";
import { LgToXl } from "../../hooks/useMedia";
import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";

const List = () => {
  const { t } = useTranslation();

  return (
    <LgToXl>
      <div className="uk-width-1-3 category-block mr-4">
        <ul data-uk-accordion className="category-list">
          <li className="uk-open">
            <a className="uk-accordion-title" href="#books">
              {t("books")}
            </a>
            <div className="uk-accordion-content">
              <ul className="uk-nav uk-nav-default">
                <li>
                  <Link to="/book-category/1">Category 1</Link>
                </li>
                <li>
                  <Link to="/book-category/1">Item</Link>
                </li>
                <li>
                  <Link to="/book-category/1">Item</Link>
                </li>
              </ul>
            </div>
          </li>
          <li>
            <a className="uk-accordion-title" href="#audio-books">
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
