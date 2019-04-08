import React from "react";
import PropTypes from "prop-types";

// css modules
import classes from "./NavBarMenuBtn.module.css";

const NavBarMenuBtn = ({ nextView, onToggle }) => {
  const changeBtnView = () => {
    let btnClasses = [classes.Hamburger, classes.HamburgerArrow];

    if (nextView) {
      btnClasses.push(classes.active);
    }

    return btnClasses.join(" ");
  };

  return (
    <button onClick={onToggle} className={changeBtnView()} type="button">
      <span className={classes.HamburgerBox}>
        <span className={classes.HamburgerInner} />
      </span>
    </button>
  );
};

NavBarMenuBtn.propTypes = {
  nextView: PropTypes.bool.isRequired,
  onToggle: PropTypes.func.isRequired
};

export default NavBarMenuBtn;
