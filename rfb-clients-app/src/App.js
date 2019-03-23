import React, { Component } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import AppNavbar from "../src/components/layout/AppNavbar";
import "./App.css";
import Dashboard from "../src/components/layout/Dashboard";
import { Provider } from "react-redux";
import store from "./store";
import AddClient from "./components/clients/AddClient";

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <Router>
          <div>
            <AppNavbar />
            <div className="container">
              <Switch>
                <Route exact path="/" component={Dashboard} />
                <Route exact path="/client/add/" component={AddClient} />
              </Switch>
            </div>
          </div>
        </Router>
      </Provider>
    );
  }
}

export default App;
