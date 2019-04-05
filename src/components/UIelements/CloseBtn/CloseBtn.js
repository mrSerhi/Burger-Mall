import React from "react";

// You may need to render at this btn in the wrapper which setup btn position on the markup

// css module
import classes from "./CloseBtn.module.css";

const closeBtn = ({ onClose }) => {
  return (
    <a onClick={onClose} href="#!" className={classes.CloseButton}>
      <div className={classes.In}>
        <div className={classes.CloseButtonBlock} />
        <div className={classes.CloseButtonBlock} />
      </div>
      <div className={classes.Out}>
        <div className={classes.CloseButtonBlock} />
        <div className={classes.CloseButtonBlock} />
      </div>
    </a>
  );
};

export default closeBtn;
