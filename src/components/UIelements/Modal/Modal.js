import React, { Component } from "react";
// import PropTypes from 'prop-types'

// css module
import classes from "./Modal.module.css";

// components
import BackDrop from "../BackDrop/BackDrop";
import Aux from "../../../hoc/Aux";

class Modal extends Component {
  // prevent updating component and childrens then props is equals
  shouldComponentUpdate(nextProps, nextState) {
    const { display, children } = this.props;

    // return true -> allow to update, else -> to skip the whole rendering process
    return nextProps.display !== display || nextProps.children !== children;
  }

  componentWillUpdate() {
    // console.log("[Module is update]");
  }

  render() {
    const modalStyleClasses = `animated ${classes.Modal} bounceInDown`;
    const { display = false, onHide } = this.props;
    return display ? (
      <Aux>
        <BackDrop display={display} hideElem={onHide} />
        <div className={modalStyleClasses}>{this.props.children}</div>
      </Aux>
    ) : null;
  }
}

export default Modal;
