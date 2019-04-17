import React, { Component } from "react";
import queryString from "query-string";

// components
import OrdersTotal from "../../components/Pages/Orders/OrdersTotal";

class CheckoutTotal extends Component {
  state = {
    ingredients: {}
  };

  componentDidMount() {
    const { search } = this.props.location;
    const { salad, bacon, cheese, meat } = queryString.parse(search);

    this.setState({ ingredients: { salad, bacon, cheese, meat } });
  }

  handleCanselClick = () => {
    this.props.history.goBack();
  };
  handleBuyClick = () => {};

  render() {
    return (
      <OrdersTotal
        onCansel={this.handleCanselClick}
        ingredients={this.state.ingredients}
      />
    );
  }
}

export default CheckoutTotal;
