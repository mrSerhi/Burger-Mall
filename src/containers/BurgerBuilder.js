import React, { Component } from "react";
import axios from "../axios-orders";
import queryString from "query-string";

// HOC
import Aux from "../hoc/Aux";
import errrorHandler from "../hoc/errorHandler";
// components
import Burger from "../components/Burger/Burger";
import BuildControls from "../components/Burger/BuildControls/BuildControls";
import Modal from "../components/UIelements/Modal/Modal";
import OrderTotal from "../components/Burger/OrderTotal/OrderTotal";
import Spinner from "../components/UIelements/Spinner/Spinner";

class BurgerBuilder extends Component {
  state = {
    ingredients: null,
    totalPrice: 0,
    allowToBuy: false,
    modalPhase: false,
    loading: false,
    error: null
  };

  _INGREDIENT_PRICES = {
    salad: 0.3,
    bacon: 1.4,
    cheese: 0.7,
    meat: 1.2
  };

  async componentDidMount() {
    try {
      // call the server
      const { data } = await axios.get("/ingredients.json");
      const { salad, bacon, cheese, meat } = data;

      this.setState({
        ingredients: {
          salad,
          bacon,
          cheese,
          meat
        }
      });
    } catch (ex) {
      this.setState({ error: ex });
      console.error("BurgerBuilder exaption: ", ex);
    }
  }

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
      // use lib to convert obj to the search string
      const searchQuery = queryString.stringify(this.state.ingredients);

      // await axios.post("/orders.json", data);
      this.setState({ loading: false, modalPhase: false });
      // go ahead on a new route and push ingredients like a search query
      this.props.history.push({
        pathname: "/orders/checkout",
        search: `?${searchQuery}`
      });
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
        orders={ingredients ? ingredients : {}}
        price={totalPrice}
      />
    );
  };

  renderBurgerBody = () => {
    const { ingredients, allowToBuy, totalPrice } = this.state;

    if (!ingredients) return <Spinner />;

    return (
      <Aux>
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
  };

  render() {
    const { error, modalPhase } = this.state;
    const renderErrorMessage = (
      <h3>
        Error: The burger don't recive ingredients from the server...Try to
        reload page
      </h3>
    );

    return (
      <Aux>
        <Modal onHide={this.handleHideModal} display={modalPhase}>
          {this.renderOrderTotal()}
        </Modal>

        {error ? renderErrorMessage : this.renderBurgerBody()}
      </Aux>
    );
  }
}

export default errrorHandler(BurgerBuilder, axios);
