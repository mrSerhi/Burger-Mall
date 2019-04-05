import React from "react";

// css module
import classes from "./BackDrop.module.css";

const BackDrop = ({ hideElem }) => {
  return <div onClick={hideElem} className={classes.Backdrop} />;
};

export default BackDrop;
