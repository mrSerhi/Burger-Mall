import React, { Component, Fragment } from "react";
import { Route } from "react-router-dom";
import queryString from "query-string";

// components
import OrdersTotal from "../../components/Pages/Orders/OrdersTotal";
import ContactData from "./ContactData/ContactData";
import Spinner from "../../components/UIelements/Spinner/Spinner";

class CheckoutTotal extends Component {
  state = {
    ingredients: null,
    totalPrice: 0
  };

  componentDidMount() {
    const { search } = this.props.location;
    const { salad, bacon, cheese, meat, totalPrice } = queryString.parse(
      search
    );
    this.setState({
      ingredients: {
        salad: parseFloat(salad),
        bacon: parseFloat(bacon),
        cheese: parseFloat(cheese),
        meat: parseFloat(meat)
      },
      totalPrice: parseFloat(totalPrice)
    });
  }

  componentDidUpdate(prevProps, prevState) {
    if (prevState.ingredients !== this.state.ingredients) {
      const { search } = this.props.location;
      const { salad, bacon, cheese, meat } = queryString.parse(search);
      const ingredients = {
        salad: parseFloat(salad),
        bacon: parseFloat(bacon),
        cheese: parseFloat(cheese),
        meat: parseFloat(meat)
      };
      return ingredients;
    }
  }

  handleCanselClick = () => {
    this.props.history.goBack();
  };
  handleOrderingClick = () => {
    this.props.history.replace(`/orders/checkout/contact_data`);
  };

  render() {
    const { ingredients, totalPrice } = this.state;

    if (!ingredients) return <Spinner />;
    return (
      <Fragment>
        <OrdersTotal
          onCansel={this.handleCanselClick}
          onOrder={this.handleOrderingClick}
          ingredients={ingredients}
        />

        <Route
          path={this.props.match.url + "/contact_data"}
          render={props => (
            <ContactData
              ingredients={ingredients}
              totalPrice={totalPrice}
              {...props}
            />
          )}
        />
      </Fragment>
    );
  }
}

export default CheckoutTotal;
