import React, { Component } from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import AppNavbar from "../src/components/layout/AppNavbar";
import "./App.css";

class App extends Component {
  render() {
    return (
      <Router>
        <div>
          <AppNavbar />
          <div className="container">
            <h1>Hello</h1>
          </div>
        </div>
      </Router>
    );
  }
}

export default App;
