import React, { Component } from "react";

// HOC
import Aux from "../hoc/Aux";
// components
import Burger from "../components/Burger/Burger";

class BurgerBuilder extends Component {
  render() {
    return (
      <Aux>
        <div>
          <Burger />
        </div>

        <div>Burger controls</div>
      </Aux>
    );
  }
}

export default BurgerBuilder;
