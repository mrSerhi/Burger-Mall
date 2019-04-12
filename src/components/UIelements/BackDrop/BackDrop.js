import React from "react";
import PropTypes from "prop-types";

// css module
import classes from "./BackDrop.module.css";

const BackDrop = ({ display, hideElem }) => {
  const showElem = {
    display: display ? "" : "none"
  };
  return (
    <div onClick={hideElem} style={showElem} className={classes.Backdrop} />
  );
};

BackDrop.propTypes = {
  hideElem: PropTypes.func.isRequired
  // display: PropTypes.bool.isRequired
};

export default BackDrop;
