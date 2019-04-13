// HOC which handle received errors than working with the server
import React, { Component } from "react";
import Modal from "../components/UIelements/Modal/Modal";
import Aux from "./Aux";

const errrorHandler = (WrappedComponent, axios) => {
  return class extends Component {
    state = { error: null };

    // Unexpacted error(network down, db down, bug)
    reqInterceptor = axios.interceptors.request.use(req => {
      this.setState({ error: null });
      return req;
    });
    // Expacted errors(Clients)
    resInterceptor = axios.interceptors.response.use(
      res => res,
      error => {
        this.setState({ error });
      }
    );

    // clear interceptors for prevent using much more than it's needed
    componentWillUnmount() {
      axios.interceptors.request.eject(this.reqInterceptor);
      axios.interceptors.response.eject(this.resInterceptor);
    }

    handleCloseModal = () => this.setState({ error: null });
    // the error message will be always displayed if we don't use error cheching
    render() {
      const { error } = this.state;
      return (
        <Aux>
          <Modal display={error} onHide={this.handleCloseModal}>
            {error ? error.message : null}
          </Modal>

          <WrappedComponent {...this.props} />
        </Aux>
      );
    }
  };
};

export default errrorHandler;
