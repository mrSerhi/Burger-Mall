import React, { Component, Fragment } from "react";
import { Route } from "react-router-dom";
import queryString from "query-string";

// components
import OrdersTotal from "../../components/Pages/Orders/OrdersTotal";
import ContactData from "./ContactData/ContactData";

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
  handleOrderingClick = () => {
    this.props.history.replace("/orders/checkout/contact_data");
  };

  render() {
    return (
      <Fragment>
        <OrdersTotal
          onCansel={this.handleCanselClick}
          onOrder={this.handleOrderingClick}
          ingredients={this.state.ingredients}
        />

        <Route
          path={this.props.match.path + "/contact_data"}
          component={ContactData}
        />
      </Fragment>
    );
  }
}

export default CheckoutTotal;
