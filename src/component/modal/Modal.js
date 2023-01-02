import React from "react";

const Modal = () => {
  return (
    <div className="modal-background">
      <button>X</button>
      <div className="modal-container">
        <div className="modal-header">
          <h1>header</h1>
        </div>
        <div className="modal-body">
          <h1>body</h1>
        </div>
        <div className="modal-footer">
          <h1>footer</h1>
        </div>
      </div>
    </div>
  );
};

export default Modal;
