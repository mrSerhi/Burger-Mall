import React from "react";
import Aux from "../../hoc/Aux";
import classes from "./Layout.module.css";

// components
import NavBar from "../NavigationBar/NavBar/NavBar";
import SideDrower from "../NavigationBar/SideDrow/SideDrow";

const layout = props => {
  return (
    <Aux>
      {/* <div>Should be included 3 child components</div> */}
      <NavBar />
      <SideDrower />
      <main className={classes.Content}>{props.children}</main>
    </Aux>
  );
};

export default layout;
