import React from "react";

// css module
import classes from "./Modal.module.css";

const Modal = ({ display, ...props }) => {
  const renderModal = <div className={classes.Modal}>{props.children}</div>;

  return display ? renderModal : null;
};

export default Modal;
