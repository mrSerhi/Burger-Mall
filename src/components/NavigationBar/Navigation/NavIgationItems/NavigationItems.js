import React from "react";
import { NavLink } from "react-router-dom";

// css module
import classes from "./NavigationItems.module.css";

const NavItems = ({ path, exact = false, children }) => {
  // const activeStyle = active ? classes.Active : null;
  return (
    <li className={classes.Item}>
      <NavLink exact activeClassName={classes.Active} to={path}>
        {children}
      </NavLink>
    </li>
  );
};

export default NavItems;
