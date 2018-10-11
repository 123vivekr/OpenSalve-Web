import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from "react-router-dom";
import Auth from "./components/auth";
import { apiVer, login, register, userDetails } from "./utils/api.js";
import Request from './components/request';
import { AppProvider  } from './Context'
import './App.css';

class App extends Component {
  render() {
	return (
		<Router>
			<div>
			  <AppProvider>
				<Route exact path="/auth" component={Auth} />
				<Route exact path="/request" component={Request} />
			  </AppProvider>
			</div>
		</Router>
	);
  }
}

export default App;
