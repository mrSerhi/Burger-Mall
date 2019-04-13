// HOC which handle recives errors than working with the server
import React, { Component } from "react";
import Modal from "../components/UIelements/Modal/Modal";
import Aux from "./Aux";

const errrorHandler = (WrappedComponent, axios) => {
  return class extends Component {
    state = { error: null };

    // *WillMount because should setup interceptors before components will be rendered
    componentWillMount() {
      // Unexpacted error(network down, db down, bug)
      axios.interceptors.request.use(req => {
        this.setState({ error: null });
        return req;
      });
      // Expacted errors(Clients)
      axios.interceptors.response.use(
        res => res,
        error => {
          this.setState({ error });
        }
      );
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
