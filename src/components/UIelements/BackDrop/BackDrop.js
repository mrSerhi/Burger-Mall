import React from "react";
import PropTypes from "prop-types";

// css module
import classes from "./BackDrop.module.css";

const BackDrop = ({ hideElem }) => {
  return <div onClick={hideElem} className={classes.Backdrop} />;
};

BackDrop.propTypes = {
  hideElem: PropTypes.func.isRequired
};

export default BackDrop;
