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
                value.isFrozen ? "Dice-Frozen" : null
              }`}
              key={value.id}
              data-id={value.id}
              onClick={this.props.freezeDie}
            ></i>
          );
        })}
        <div>
          <button
            className={`Dice-RollButton ${
              this.props.rollsRemaining < 1 ? "disabled" : null
            }`}
            onClick={this.props.rollDice}
          >
            {this.props.rollsRemaining} Rolls Left
          </button>
        </div>
      </div>
    );
  }
}

export default Dice;
