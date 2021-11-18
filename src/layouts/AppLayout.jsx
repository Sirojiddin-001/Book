import React from "react";
import List from "../components/List/LIst";
import Navbar from "../components/Navbar/Navbar";

const AppLayout = ({ children }) => {
  return (
    <div>
      <Navbar />
      <div className="px-sm-0 container uk-flex pt-4">
        <List />
        <div className="ml-0 ml-lg-4 uk-width-expand">{children}</div>
      </div>
    </div>
  );
};

export default AppLayout;
