import React, { Component } from "react";
import Yahtzee from "./Yahtzee";
import "./stylesheets/App.css";

class App extends Component {
  render() {
    return (
      <div className="App">
        <Yahtzee />
      </div>
    );
  }
}

export default App;
