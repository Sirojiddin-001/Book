import React from "react";

const OffCanvas = () => {
  return (
    <div id="vertical-menu" uk-offcanvas="overlay: true">
      <div className="uk-offcanvas-bar">
      <button class=" mr-n1 mt-n2 uk-offcanvas-close" type="button" data-uk-close></button>
        <ul className="mt-4 uk-nav-default uk-nav-parent-icon" data-uk-nav>
          <li className="uk-active uk-parent uk-open">
            <a href="#">Parent</a>
            <ul className="uk-nav-sub">
              <li>
                <a href="#">Sub item</a>
              </li>
              <li>
                <a href="#">Sub item</a>  
              </li>
            </ul>
          </li>
          <li className="uk-parent">
            <a href="#">Parent</a>
            <ul className="uk-nav-sub">
              <li>
                <a href="#">Sub item</a>
              </li>
              <li>
                <a href="#">Sub item</a>
              </li>
            </ul>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default OffCanvas;
