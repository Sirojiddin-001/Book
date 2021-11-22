import React from "react";

const Grid = ({ children, ...props }) => {
  return (
    <div {...props} className="d-flex">
      {children}
    </div>
  );
};

export default Grid;
