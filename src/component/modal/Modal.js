import React from "react";
import { createPortal } from "react-dom";
import { closeModal } from "../../features/user/userSlice";
import { useDispatch } from "react-redux";
import "./Modal.css";

const Modal = (props) => {
  const dispatch = useDispatch();
  return createPortal(
    <div>
      <div className="overlay" onClick={() => dispatch(closeModal())}>
        {props.children}
      </div>
    </div>,
    document.getElementById("modal")
  );
};

export default Modal;
