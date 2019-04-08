import React from "react";
// import PropTypes from 'prop-types'

// css module
import classes from "./Modal.module.css";

// components
import BackDrop from "../BackDrop/BackDrop";
import Aux from "../../../hoc/Aux";

const Modal = ({ display = false, onHide, ...props }) => {
  const modalStyleClasses = `animated ${classes.Modal} bounceInDown`;

  return display ? (
    <Aux>
      <BackDrop showPhase={display} hideElem={onHide} />
      <div className={modalStyleClasses}>{props.children}</div>
    </Aux>
  ) : null;
};

export default Modal;
