import React from "react";

const Background = ({ url }) => {
  return (
    <div className="uk-width-2-3@m">
      <div
        style={{
          backgroundImage: `url(${url})`,
        }}
      ></div>
    </div>
  );
};

export default Background;
