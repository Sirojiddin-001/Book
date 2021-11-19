import React from "react";
import List from "../components/List/LIst";
import Navbar from "../components/Navbar/Navbar";
import Footer from "../components/Footer/Footer";

const AppLayout = ({ children }) => {
  return (
    <div>
      <Navbar />
      <div className="px-sm-0 container uk-flex pt-4">
        <List />
        <div className="ml-auto uk-width-2-3@m">{children}</div>
      </div>
      <Footer/>
    </div>
  );
};

export default AppLayout;
