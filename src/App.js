import React, { Component } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import "./main.css";

// import components
import Header from "../src/components/layout/Header";
import Navigation from "../src/components/layout/Navigation";
import Landing from "../src/components/layout/Landing";
class App extends Component {
  render() {
    return (
      <Router>
        <div className="App">
          <Header />
          <Navigation />
          <Landing />
        </div>
      </Router>
    );
  }
}

export default App;
