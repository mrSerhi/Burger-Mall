import React from "react";
import PropTypes from "prop-types";

// css module
import classes from "./Button.module.css";

const Button = ({ btnType, onClicked, children }) => {
  // btnType -> string with "Success" or "Danger"
  const dynamic = [classes.Button, classes[btnType]].join(" ");

  return (
    <button onClick={onClicked} className={dynamic}>
      {children}
    </button>
  );
};

Button.propTypes = {
  btnType: PropTypes.string.isRequired,
  onClicked: PropTypes.func.isRequired
};

export default Button;
