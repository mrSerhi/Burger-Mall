import React, { Component } from "react";
import axios from "../axios-orders";

// HOC
import Aux from "../hoc/Aux";
// components
import Burger from "../components/Burger/Burger";
import BuildControls from "../components/Burger/BuildControls/BuildControls";
import Modal from "../components/UIelements/Modal/Modal";
import OrderTotal from "../components/Burger/OrderTotal/OrderTotal";
import Spinner from "../components/UIelements/Spinner/Spinner";

class BurgerBuilder extends Component {
  state = {
    ingredients: {
      salad: 0,
      bacon: 0,
      cheese: 0,
      meat: 0
    },
    totalPrice: 0,
    allowToBuy: false,
    modalPhase: false,
    loading: false
  };

  _INGREDIENT_PRICES = {
    salad: 0.3,
    bacon: 1.4,
    cheese: 0.7,
    meat: 1.2
  };
  // ingredients we should get then call add or delete handlers
  UpdateAllowToBuyState = ingredients => {
    // loop keys -> return value of each ingr and sum that
    const sumOfingredients = Object.keys(ingredients)
      .map(ing => ingredients[ing])
      .reduce((acc, num) => acc + num, 0);

    // set if 0 -> false, 1, 2 ... -> true
    this.setState({ allowToBuy: !!sumOfingredients });
  };

  handleAddingIngredients = type => {
    const ingredients = { ...this.state.ingredients };
    const totalPrice = this.state.totalPrice;
    const updatedPrice = parseFloat(
      (totalPrice + this._INGREDIENT_PRICES[type]).toFixed(2)
    );
    ingredients[type] = ingredients[type] + 1;
    // updating
    this.UpdateAllowToBuyState(ingredients);

    this.setState({ ingredients, totalPrice: updatedPrice });
  };

  handleRemovingIngredients = type => {
    const ingredients = { ...this.state.ingredients };
    const totalPrice = this.state.totalPrice;

    if (totalPrice > 0) {
      const updatedPrice = parseFloat(
        (totalPrice - this._INGREDIENT_PRICES[type]).toFixed(2)
      );
      ingredients[type] = ingredients[type] > 0 ? ingredients[type] - 1 : 0;
      // updating
      this.UpdateAllowToBuyState(ingredients);

      this.setState({ ingredients, totalPrice: updatedPrice });
    }
    return;
  };

  handleDisplayModal = () => this.setState({ modalPhase: true });
  handleHideModal = e => {
    e.preventDefault();
    this.setState({ modalPhase: false });
  };
  // handle sending request to the server
  handleSendingOrder = async () => {
    // loading phase
    this.setState({ loading: true });

    // 1. create the obj with data for sending on server
    const data = {
      ingredients: this.state.ingredients,
      price: this.state.totalPrice,
      customer: {
        name: "Villy",
        address: {
          country: "Ukraine",
          zipcode: "063097",
          street: "Bulsheet 69"
        },
        email: "fuckOf.villy@gmail.com"
      },
      deliveryMethod: "fast"
    };

    // 2. Call axios and send data to the server
    try {
      await axios.post("/orders.json", data);
      this.setState({ loading: false, modalPhase: false });
    } catch (ex) {
      this.setState({ loading: false, modalPhase: false });
      console.error("Response is failed...", ex);
    }
  };

  setUpBtnDisabling = () => {
    const ingredients = { ...this.state.ingredients };
    // loop each value and set true / false
    for (const key in ingredients) {
      ingredients[key] = ingredients[key] <= 0;
    }
    return ingredients;
  };

  renderOrderTotal = () => {
    const { ingredients, totalPrice, loading } = this.state;

    if (loading) return <Spinner />;

    return (
      <OrderTotal
        onHideElem={this.handleHideModal}
        onContinue={this.handleSendingOrder}
        orders={ingredients}
        price={totalPrice}
      />
    );
  };

  render() {
    const { ingredients, totalPrice, allowToBuy, modalPhase } = this.state;

    return (
      <Aux>
        <Modal onHide={this.handleHideModal} display={modalPhase}>
          {this.renderOrderTotal()}
        </Modal>

        <Burger ingredients={ingredients} />

        <BuildControls
          onAddIngredients={this.handleAddingIngredients}
          onDeleteIngredients={this.handleRemovingIngredients}
          disabling={this.setUpBtnDisabling()}
          disablingBuyBtn={allowToBuy}
          price={totalPrice}
          onTogglingModal={this.handleDisplayModal}
        />
      </Aux>
    );
  }
}

export default BurgerBuilder;
