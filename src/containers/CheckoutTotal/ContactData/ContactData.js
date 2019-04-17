import React, { Component } from "react";

import classes from "./ContactData.module.css";

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
    }
  };
  render() {
    return (
      <div className={classes.ContactData}>
        <div className={classes.Form}>
          <h2>Client Form</h2>
          <form>
            <input type="text" name="fullname" placeholder="Fullname" />
            <input type="email" name="email" placeholder="Email" />
            <input type="text" name="zipcode" placeholder="Zip-code" />
            <input type="text" name="country" placeholder="Country" />
            <input type="text" name="street" placeholder="Street" />
            <button type="submit">Lets Go!</button>
          </form>
        </div>
      </div>
    );
  }
}

export default ContactData;
