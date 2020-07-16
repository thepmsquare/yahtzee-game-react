import React, { Component } from "react";

import "./stylesheets/Dice.css";

class Dice extends Component {
  render() {
    return (
      <div className="Dice">
        {this.props.diceValues.map((value) => {
          return (
            <i
              className={`fas fa-dice-${value.text} Dice-Die ${
                value.isFrozen ? "Dice-Frozen" : ""
              }`}
              key={value.id}
              data-id={value.id}
              onClick={this.props.freezeDie}
            ></i>
          );
        })}

        <button
          className={`Dice-RollButton ${
            this.props.rollsRemaining < 1 ? "disabled" : ""
          }`}
          onClick={this.props.rollDice}
        >
          {this.props.rollsRemaining} Rolls Left
        </button>
      </div>
    );
  }
}

export default Dice;
