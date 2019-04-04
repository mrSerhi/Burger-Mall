import React from "react";
import PropTypes from "prop-types";
import classes from "./BuildControl.module.css";

const BuildControl = ({ title, btnDisable, onAdd, onDelete }) => {
  return (
    <div className={classes.BuildControl}>
      <div className={classes.Label}>{title}</div>

      <button onClick={onAdd} className={classes.More}>
        <i className="fas fa-plus" />
      </button>
      <button onClick={onDelete} className={classes.Less} disabled={btnDisable}>
        <i className="fas fa-minus" />
      </button>
    </div>
  );
};

BuildControl.propTypes = {
  title: PropTypes.string.isRequired
};

export default BuildControl;
