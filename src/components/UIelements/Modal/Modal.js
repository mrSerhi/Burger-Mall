import React from "react";

// css module
import classes from "./Modal.module.css";

// components
import BackDrop from "../BackDrop/BackDrop";
import Aux from "../../../hoc/Aux";

const Modal = ({ display, onHide, ...props }) => {
  const modalStyleClasses = `animated ${classes.Modal} bounceInDown`;
  const renderModal = <div className={modalStyleClasses}>{props.children}</div>;

  return display ? (
    <Aux>
      <BackDrop hideElem={onHide} />
      {renderModal}
    </Aux>
  ) : null;
};

export default Modal;
