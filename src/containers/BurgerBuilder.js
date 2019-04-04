import React, { Component } from "react";

// HOC
import Aux from "../hoc/Aux";
// components
import Burger from "../components/Burger/Burger";

class BurgerBuilder extends Component {
  state = {
    ingredients: {
      salad: 0,
      bacon: 0,
      cheese: 0,
      meat: 0
    }
  };

  render() {
    const { ingredients } = this.state;

    return (
      <Aux>
        <div>
          <Burger ingredients={ingredients} />
        </div>

        <div>Burger controls</div>
      </Aux>
    );
  }
}

export default BurgerBuilder;
