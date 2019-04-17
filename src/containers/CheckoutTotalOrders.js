import React, { Component } from "react";

// components
import OrdersTotal from "../components/Pages/Orders/OrdersTotal";

class CheckoutTotal extends Component {
  state = {
    ingredients: {
      salad: 2,
      bacon: 1,
      cheese: 2,
      meat: 1
    }
  };
  render() {
    return <OrdersTotal ingredients={this.state.ingredients} />;
  }
}

export default CheckoutTotal;
