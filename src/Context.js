import React from 'react';

const defaultState = {
  isLoggedIn: false,
};

const Context = React.createContext({state: defaultState});

export const { Provider, Consumer } = Context;
