import React, { Component } from "react";
import Aux from "../../hoc/Aux";
import classes from "./Layout.module.css";

// components
import NavBar from "../NavigationBar/NavBar/NavBar";
import SideDrower from "../NavigationBar/SideDrow/SideDrow";

class Layout extends Component {
  state = {
    opend: true
  };

  handleOpeningSideDrower = () => {
    this.setState({ opend: false });
  };

  render() {
    return (
      <Aux>
        <NavBar />
        <SideDrower
          opend={this.state.opend}
          onOpeningSideDrower={this.handleOpeningSideDrower}
        />
        <main className={classes.Content}>{this.props.children}</main>
      </Aux>
    );
  }
}

export default Layout;
