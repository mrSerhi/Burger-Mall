import React from "react";
import PropTypes from "prop-types";

// css module
import classes from "./BackDrop.module.css";

const BackDrop = ({ showPhase, hideElem }) => {
  const showElem = {
    display: showPhase ? "" : "none"
  };
  return (
    <div onClick={hideElem} style={showElem} className={classes.Backdrop} />
  );
};

BackDrop.propTypes = {
  hideElem: PropTypes.func.isRequired,
  showPhase: PropTypes.bool.isRequired
};

export default BackDrop;
