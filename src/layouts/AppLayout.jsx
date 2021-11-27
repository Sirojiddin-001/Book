import React from "react";
import List from "../components/List/LIst";
import Navbar from "../components/Navbar/Navbar";
import Footer from "../components/Footer/Footer";
import OffCanvas from "../components/OffCanvas//OffCanvas"

const AppLayout = ({ children }) => {
  return (
    <div>
      <Navbar />
      <OffCanvas/>
      <div className="px-sm-0 container uk-flex mt-4" uk-height-viewport="expand: true">
        <List />
        <div className="ml-auto uk-width-2-3@m">{children}</div>
      </div>
      <Footer/>
    </div>
  );
};

export default AppLayout;
