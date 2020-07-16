import React, { Component } from "react";

import "./stylesheets/Rules.css";

class Rules extends Component {
  render() {
    return (
      <div className="Rules" id="Rules">
        <h1>Rules</h1>
        <ul>
          <li>Ideal with 2 or more players.</li>
          <li>Open the same link on other devices to play simultaneously.</li>
          <li>Main goal of the game is to score more than the opponent.</li>
          <li>Game consists of 13 total rounds. </li>
          <li>Each round begins with 5 dice already rolled for you.</li>
          <li>
            Points are scored if the numbers on dice match the pattern given in
            the table.
          </li>
          <li>
            You can roll these dice upto 2 more times each round until you reach
            the desired outcome.
          </li>
          <li>
            You can freeze/unfreeze any die by clicking on it. Frozen dice will
            not roll.
          </li>
          <li>The Round ends when you select a pattern.</li>
          <li>
            You must select at least one pattern for the next round to begin
          </li>
        </ul>
      </div>
    );
  }
}

export default Rules;
