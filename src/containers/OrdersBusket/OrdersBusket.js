import React, { Component } from "react";
import axios from "../../axios-orders";

// components
import OrdersForBusket from "../../components/ForPages/OrdersForBusket/Orders";
import errrorHandler from "../../hoc/errorHandler";
import Spinner from "../../components/UIelements/Spinner/Spinner";

class OrdersBusket extends Component {
  state = {
    orders: [],
    loading: false
  };

  async componentDidMount() {
    this.setState({ loading: true });
    // call the server
    try {
      const response = await axios.get("/orders.json");
      // create array of received orders objects with unique id
      const orders = [];
      Object.keys(response.data).map(key =>
        orders.push({ ...response.data[key], id: key })
      );
      this.setState({ orders, loading: false });
    } catch (ex) {
      this.setState({ loading: false });
      console.error("Not receives data: ", ex.message);
    }
  }
  // helper render React Elements
  renderingOrders = () => {
    return this.state.orders.map(({ id, ingredients, totalPrice }, index) => {
      return (
        <OrdersForBusket
          key={id}
          ingredients={ingredients}
          price={totalPrice}
          orderNum={index + 1}
        />
      );
    });
  };

  render() {
    const { loading } = this.state;
    return !loading ? this.renderingOrders() : <Spinner />;
  }
}

export default errrorHandler(OrdersBusket, axios);
