import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter } from "react-router-dom";

import App from "./App";

import "uikit/dist/css/uikit.css"
import "uikit/dist/js/uikit"
import "./assets/style/base.scss"
import "./assets/style/bootstrap-grid.css"
import "./assets/fontawesome/css/all.css"

ReactDOM.render(
  <BrowserRouter>
    <App />
  </BrowserRouter>,
  document.getElementById("root")
);
