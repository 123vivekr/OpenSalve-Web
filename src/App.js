import React, { Component } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Auth from "./components/auth";
import NavBar from "./components/navbar";
import { apiVer, login, register, userDetails } from "./utils/api.js";
import Request from "./components/requests";
import Help from "./components/help";
import Analytics from "./components/analytics";
import Camps from "./components/camps";
import { AppProvider } from "./Context";
import "./App.css";


class App extends Component {
    render() {
        return (
            <Router>
                <div>
                    <NavBar />
                    <br />
                    <AppProvider>
                        <Route exact path="/auth" component={Auth} />
                        <Route exact path="/requests" component={Request} />
                        <Route exact path="/analytics" component={Analytics} />
                        <Route exact path="/help" component={Help} />
                        <Route exact path="/camps" component={Camps} />
                    </AppProvider>
                </div>
            </Router>
        );
    }
}

export default App;
