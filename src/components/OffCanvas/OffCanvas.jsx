import React from "react";
import Avatar from "react-avatar";
import { useTranslation } from "react-i18next";
import { useNavigate } from "react-router-dom";

const data = JSON.parse(localStorage.getItem("user"));

const OffCanvas = () => {
  const { t } = useTranslation();
  const navigator = useNavigate();

  return (
    <div id="vertical-menu" uk-offcanvas="overlay: true">
      <div className="uk-offcanvas-bar">
        {data ? (
          <div className="d-flex">
            <Avatar
              size="50"
              color="#0058ff"
              textSizeRatio={2.6}
              // src={ProfileAvatar}
              round
              maxInitials={2}
              name={data.name}
            />

            <div className="uk-width-1-1 ml-3 mb-3 profile-info">
              <p className="m-0 p-0 font-semibold uk-text-truncate">
                {data.name}
              </p>
              <p className="m-0 p-0 uk-text-small uk-text-truncate">
                {data.email}
              </p>
            </div>
          </div>
        ) : (
          <div>
            <button
              onClick={() => {
                navigator("/login");
              }}
              className="uk-width-1-1 uk-button book-primary-btn-o"
            >
              {t("sign_in")}
            </button>

            <button
              onClick={() => {
                navigator("/register");
              }}
              className="uk-width-1-1 uk-button book-primary-btn my-3"
            >
              {t("sign_up")}
            </button>
          </div>
        )}

        <ul className="mt-4 uk-nav-default uk-nav-parent-icon" data-uk-nav>
          <li className="uk-active uk-parent uk-open">
            <a href="#1">Parent</a>
            <ul className="uk-nav-sub">
              <li>
                <a href="#2">Sub item</a>
              </li>
              <li>
                <a href="#3">Sub item</a>
              </li>
              <li>
                <a href="#4">Sub item</a>
              </li>
            </ul>
          </li>
          <li>
            <a href="#5">Settings</a>
          </li>
          <li>
            <a href="#6">Log Out</a>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default OffCanvas;
