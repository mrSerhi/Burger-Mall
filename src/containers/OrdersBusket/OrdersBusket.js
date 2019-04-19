import React, { Component } from "react";
import axios from "../../axios-orders";

// components
import OrdersForBusket from "../../components/ForPages/OrdersForBusket/Orders";
import errrorHandler from "../../hoc/errorHandler";

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

  render() {
    return (
      <div className="div">
        <OrdersForBusket />
        <OrdersForBusket />
      </div>
    );
  }
}

export default errrorHandler(OrdersBusket, axios);
