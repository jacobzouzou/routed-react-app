import React, { Component } from "react";

const { Provider, Consumer } = React.createContext();

// const WithRedButton = button => <button color="red" />

class Server extends Component {
  constructor(props) {
    super(props);
    this.state = {
      message: "Hello",
      user:"Jacob"
    };
  }
  render() {
    return (
      <Provider value={{ state: this.state }}>{this.props.children}</Provider>
    );
  }
}
class Client extends Component {
  render() {
    return (
      <Consumer>
        {(context) => <button>{context.state.message} {context.state.user}</button>}
      </Consumer>
    );
  }
}
class ContextApi extends Component {
  render() {
    return (
      <Server>
        <Client></Client>
      </Server>
    );
  }
}

export default ContextApi;
