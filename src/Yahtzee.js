import React, { Component } from "react";
import Dice from "./Dice";
import { v4 as uuidv4 } from "uuid";
import "./stylesheets/Yahtzee.css";

class Yahtzee extends Component {
  constructor(props) {
    super(props);
    let initialState = [];
    for (let i = 0; i < 5; i++) {
      initialState.push({ id: uuidv4(), isFrozen: false });
    }
    initialState = this.generateRandomValues(initialState);
    this.state = {
      diceValues: initialState,
      rollsRemaining: 2,
    };
  }
  generateRandomValues = (initialState) => {
    const returnThis = [...initialState];
    for (let i = 0; i < 5; i++) {
      if (!initialState[i].isFrozen) {
        const randomValue = Math.floor(Math.random() * 5) + 1;
        let text = "";
        switch (randomValue) {
          case 1:
            text = "one";
            break;
          case 2:
            text = "two";
            break;
          case 3:
            text = "three";
            break;
          case 4:
            text = "four";
            break;
          case 5:
            text = "five";
            break;
          case 6:
            text = "six";
            break;
          default:
            break;
        }
        returnThis[i].num = randomValue;
        returnThis[i].text = text;
      }
    }
    return returnThis;
  };
  rollDice = () => {
    if (this.state.rollsRemaining > 0) {
      const newState = this.generateRandomValues(this.state.diceValues);
      this.setState((curState) => {
        return {
          diceValues: newState,
          rollsRemaining: curState.rollsRemaining - 1,
        };
      });
    }
  };
  freezeDie = (e) => {
    const newState = [...this.state.diceValues];
    const freezeThisIndex = newState.findIndex((ele) => {
      return ele.id === e.target.getAttribute("data-id");
    });
    newState[freezeThisIndex].isFrozen =
      newState[freezeThisIndex].isFrozen === false ? true : false;
    this.setState({ diceValues: newState });
  };
  render() {
    return (
      <div className="Yahtzee">
        <h1>Yahtzee</h1>
        <Dice
          diceValues={this.state.diceValues}
          rollDice={this.rollDice}
          freezeDie={this.freezeDie}
          rollsRemaining={this.state.rollsRemaining}
        />
      </div>
    );
  }
}

export default Yahtzee;
