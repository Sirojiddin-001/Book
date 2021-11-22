import React from "react";

const Modal = ({ children, visible, setVisible }) => {
  return (
    <div
      className={`uk-modal ${visible && "uk-open"}`}
      style={{ display: visible ? "block" : "none" }}
      onClick={() => setVisible(false)}
    >
      <div className="h-full grid place-items-center w-full uk-animation-scale-up">
        <div className="w-full md:w-1/2" onClick={(e) => e.stopPropagation()}>{children}</div>
      </div>
    </div>
  );
};

export default Modal;
