import React, { Component } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Auth from "./components/auth";
import { apiVer, login, register, userDetails } from "./utils/api.js";
import Request from "./components/requests";
import Help from "./components/help";
import Analytics from "./components/analytics";
import { AppProvider } from "./Context";
import "./App.css";

class App extends Component {
  render() {
    return (
      <Router>
        <div>
          <AppProvider>
            <Route exact path="/auth" component={Auth} />
            <Route exact path="/requests" component={Request} />
            <Route exact path="/analytics" component={Analytics} />
            <Route exact path="/help" component={Help} />
          </AppProvider>
        </div>
      </Router>
    );
  }
}

export default App;
