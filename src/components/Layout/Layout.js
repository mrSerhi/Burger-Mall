import React, { Component } from "react";
import Aux from "../../hoc/Aux";
import classes from "./Layout.module.css";

// components
import NavBar from "../NavigationBar/NavBar/NavBar";
import SideDrower from "../NavigationBar/SideDrow/SideDrow";

class Layout extends Component {
  state = {
    opend: false
  };

  handleOpeningSideDrower = () => {
    this.setState({ opend: false });
  };

  handleTogglingNavBarMenu = () => {
    this.setState(({ opend }) => {
      return { opend: !opend };
    });
  };

  render() {
    const { opend } = this.state;
    return (
      <Aux>
        <NavBar
          openPhase={opend}
          onToggleMenu={this.handleTogglingNavBarMenu}
        />
        <SideDrower
          opend={opend}
          onOpeningSideDrower={this.handleOpeningSideDrower}
        />
        <main className={classes.Content}>{this.props.children}</main>
      </Aux>
    );
  }
}

export default Layout;
