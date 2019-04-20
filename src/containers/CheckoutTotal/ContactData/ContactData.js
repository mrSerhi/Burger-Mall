import React from "react";
import { withFormik, Form, Field, ErrorMessage } from "formik";
import * as yup from "yup";
import axios from "../../../axios-orders";

import classes from "./ContactData.module.css";

const ContactData = ({ isValidating, isSubmitting }) => {
  return (
    <div className={classes.ContactData}>
      <div className={classes.Form}>
        <h2>Client Form</h2>

        <Form>
          <Field type="text" name="fullname" placeholder="Fullname" />
          <ErrorMessage component="span" name="fullname" />

          <Field type="email" name="email" placeholder="Email" />
          <ErrorMessage component="span" name="email" />

          <Field type="text" name="zipcode" placeholder="Zip-code" />
          <ErrorMessage component="span" name="zipcode" />

          <Field component="select" name="country">
            <option value="ukraine">Ukraine</option>
            <option value="usa">USA</option>
            <option value="germany">Germany</option>
            <option value="polish">Polish</option>
          </Field>

          <Field type="text" name="address" placeholder="Address" />
          <ErrorMessage component="span" name="address" />

          <button type="submit" disabled={isValidating && isSubmitting}>
            Lets Go!
          </button>
        </Form>
      </div>
    </div>
  );
};

export default withFormik({
  mapPropsToValues({ fullname, email, zipcode, country, address }) {
    // should return obj where key is name of input field
    return {
      fullname: fullname || "",
      email: email || "",
      zipcode: zipcode || "",
      country: country || "ukraine",
      address: address || ""
    };
  },
  // validation rules
  validationSchema: yup.object().shape({
    fullname: yup
      .string()
      .lowercase()
      .required("Fullname is required!"),
    email: yup
      .string()
      .email("Please type a valid email address")
      .required("Email is required!"),
    zipcode: yup
      .string()
      .matches(/^\d+$/, "Please type numbers")
      .length(6, "Zipcode must be equals 6 digits")
      .required("Zipcode is required!"),
    country: yup.string(),
    address: yup
      .string()
      .trim()
      .required("Addred is required!")
  }),
  async handleSubmit(
    values,
    {
      props: { ingredients, totalPrice, history }, // contains all props from wrappedComponent
      resetForm
    }
  ) {
    // comparing received data
    const data = {
      ingredients,
      totalPrice,
      customer: { ...values }
    };
    // push data to the server
    await axios.post("/orders.json", data);
    // when push to the server -> clean form fields
    resetForm();
    // back to home page
    history.push("/");
  }
})(ContactData);
