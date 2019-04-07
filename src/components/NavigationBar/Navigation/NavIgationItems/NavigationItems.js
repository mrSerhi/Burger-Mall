import React from "react";

// css module
import classes from "./NavigationItems.module.css";

const NavItems = ({ path, active, children }) => {
  const activeStyle = active ? classes.Active : null;
  return (
    <li className={classes.Item}>
      <a className={activeStyle} href={path}>
        {children}
      </a>
    </li>
  );
};

export default NavItems;
