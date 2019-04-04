import React from "react";
import classes from "./BuildControl.css";

const BuildControl = ({ ingredient }) => {
  return (
    <div className={classes.BuildControl}>
      <div className={classes.Label}>{ingredient}</div>

      <button className={classes.More}>
        <i className="fas fa-plus" />
      </button>
      <button className={classes.Less}>
        <i className="fas fa-minus" />
      </button>
    </div>
  );
};

export default BuildControl;
