import React, { Component } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import AppNavbar from "../src/components/layout/AppNavbar";
import "./App.css";
import Dashboard from "../src/components/layout/Dashboard";

class App extends Component {
  render() {
    return (
      <Router>
        <div>
          <AppNavbar />
          <div className="container">
            <Switch>
              <Route exact path="/" component={Dashboard} />
            </Switch>
          </div>
        </div>
      </Router>
    );
  }
}

export default App;
