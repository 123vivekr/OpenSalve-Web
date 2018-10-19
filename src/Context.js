import React from "react";

const defaultState = {
  isLoggedIn: false
};

const Context = React.createContext({ state: defaultState });

export const { Provider, Consumer } = Context;

export class AppProvider extends React.Component {
  state = {
    currentPage: ""
  };
  toggleLoggedIn = () => {
    this.setState({ isLoggedIn: !this.state.isLoggedIn });
  };
  setCurrentPage = currentPage => {
    this.setState({ currentPage });
  };
  render() {
    return (
      <Provider
        value={{
          state: this.state,
          actions: {
            toggleLoggedIn: this.toggleLoggedIn
          }
        }}
      >
        {this.props.children}
      </Provider>
    );
  }
}
