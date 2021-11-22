import React from "react";
import Avatar from "react-avatar";
import { SmToXl } from "../../hooks/useMedia";

const data = JSON.parse(localStorage.getItem("user"));

const Content = () => {
  return (
    <div className="p-3">
      <div className="d-flex profile-block">
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
          <p className="m-0 p-0 font-semibold uk-text-truncate">{data.name}</p>
          <p className="m-0 p-0 uk-text-small uk-text-truncate">{data.email}</p>
        </div>
      </div>

      <ul className="uk-nav uk-dropdown-nav language-select">
        <li>
          <a href="#setting">
            <span>Settings</span>
          </a>
        </li>

        <li>
          <a href="#logout">
            <span>Log Out</span>
          </a>
        </li>
      </ul>
    </div>
  ) ;
};

const Profile = () => {
  return (
    <SmToXl>
      {" "}
      <div className="ml-sm-3 ml-0">
        <span className="language profile" tabIndex="0">
          <Avatar
            size="38"
            color="#0058ff"
            textSizeRatio={2.6}
            // src={ProfileAvatar}
            round
            maxInitials={2}
            name={data.name}
          />
        </span>

        <div
          className="uk-border-rounded border-500 bg-100 uk-box-shadow-medium"
          uk-drop="mode: click; boundary: .profile"
        >
          <Content />
        </div>
      </div>{" "}
    </SmToXl>
  );
};

export default Profile;
