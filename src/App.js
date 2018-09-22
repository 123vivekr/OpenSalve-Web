import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from "react-router-dom";
import Auth from "./components/auth";
import { apiVer, login, register } from "./utils/api.js";
import Request from './components/request';
import './App.css';

class App extends Component {
  render() {
    console.log(apiVer());
    console.log(login());
    return (
        <Router>
            <div>
                <Route exact path="/auth" component={Auth} />
                <Route exact path="/request" component={Request} />
            </div>
        </Router>
    );
  }
}

export default App;
