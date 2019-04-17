import React, { Component } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

// components
import Layout from "./components/Layout/Layout";
import BurgerBuilder from "./containers/BurgerBuilder";
import CheckoutTotal from "./containers/CheckoutTotal/CheckoutTotalOrders";

class App extends Component {
  render() {
    return (
      <Router>
        <Layout>
          <Switch>
            <Route exact path="/" component={BurgerBuilder} />
            <Route path="/orders/checkout" component={CheckoutTotal} />
          </Switch>
        </Layout>
      </Router>
    );
  }
}

export default App;
