import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from "react-router-dom";
import Auth from "./components/auth";
import { apiVer } from "./utils/api.js";
import './App.css';

class App extends Component {
  render() {
    console.log(apiVer());
    return (
        <Router>
            <div>
                <Route exact path="/auth" component={Auth} />
            </div>
        </Router>
    );
  }
}

export default App;
