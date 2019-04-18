import React, { Component } from "react";
import axios from "../../../axios-orders";
import PropTypes from "prop-types";

import classes from "./ContactData.module.css";
import Spinner from "../../../components/UIelements/Spinner/Spinner";

class ContactData extends Component {
  state = {
    customer: {
      name: "",
      address: {
        country: "",
        zipcode: "",
        street: ""
      },
      email: ""
    },
    loading: false
  };
  // submiting to the server
  handleSubmiting = async e => {
    e.preventDefault();
    // setup loading state
    this.setState({ loading: true });
    // should get the ingredients and totalPrice
    const { ingredients, totalPrice } = this.props;
    // ingredients, totalPrice, customer -> {}
    const data = {
      ingredients,
      totalPrice
    };

    // pushing to the server
    try {
      await axios.post("/orders.json", data);
      this.setState({ loading: false });
      // redirection to the home page
      this.props.history.push("/");
    } catch (ex) {
      this.setState({ loading: false });
      console.error("Response is failed...", ex);
    }
  };

  // rendering React Elements
  renderingForm = () => {
    if (this.state.loading) return <Spinner />;

    return (
      <form onSubmit={this.handleSubmiting}>
        <input type="text" name="fullname" placeholder="Fullname" />
        <input type="email" name="email" placeholder="Email" />
        <input type="text" name="zipcode" placeholder="Zip-code" />
        <input type="text" name="country" placeholder="Country" />
        <input type="text" name="street" placeholder="Street" />

        <button type="submit">Lets Go!</button>
      </form>
    );
  };

  render() {
    return (
      <div className={classes.ContactData}>
        <div className={classes.Form}>
          <h2>Client Form</h2>
          {this.renderingForm()}
        </div>
      </div>
    );
  }
}

ContactData.propTypes = {
  ingredients: PropTypes.object,
  totalPrice: PropTypes.number
};

export default ContactData;
