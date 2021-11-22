import React from "react";
import { MdToXl } from "../../hooks/useMedia"
const Background = ({ url }) => {
  return (
    <MdToXl>
      <div className="uk-width-2-3@m">
        <div
          className="login-bg"
          style={{
            backgroundImage: `url(${url})`,
          }}
        ></div>
      </div>
    </MdToXl>
  );
};

export default Background;
