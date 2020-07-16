import React, { Component } from "react";
import Dice from "./Dice";
import Scoreboard from "./Scoreboard";
import Rules from "./Rules";
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
      possibleScores: this.updatePossibleScores(initialState),
      score: 0,
      clickedCategories: [],
    };
  }
  generateRandomValues = (initialState) => {
    const returnThis = [...initialState];
    for (let i = 0; i < 5; i++) {
      if (!initialState[i].isFrozen) {
        const randomValue = Math.floor(Math.random() * 6) + 1;
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
      if (this.state.rollsRemaining === 1) {
        const newState = this.generateRandomValues(this.state.diceValues);
        newState.forEach((ele) => {
          ele.isFrozen = true;
        });
        this.setState((curState) => {
          return {
            diceValues: newState,
            rollsRemaining: curState.rollsRemaining - 1,
            possibleScores: this.updatePossibleScores(newState),
          };
        });
      } else {
        const newState = this.generateRandomValues(this.state.diceValues);
        this.setState((curState) => {
          return {
            diceValues: newState,
            rollsRemaining: curState.rollsRemaining - 1,
            possibleScores: this.updatePossibleScores(newState),
          };
        });
      }
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
  doesArrayContain = (arr, target) => target.every((v) => arr.includes(v));
  updatePossibleScores = (curStateValues) => {
    const values = curStateValues.map((ele) => {
      return ele.num;
    });
    const returnThis = {
      Ones:
        1 *
        values.filter((ele) => {
          return ele === 1;
        }).length,
      Twos:
        2 *
        values.filter((ele) => {
          return ele === 2;
        }).length,
      Threes:
        3 *
        values.filter((ele) => {
          return ele === 3;
        }).length,
      Fours:
        4 *
        values.filter((ele) => {
          return ele === 4;
        }).length,
      Fives:
        5 *
        values.filter((ele) => {
          return ele === 5;
        }).length,
      Sixes:
        6 *
        values.filter((ele) => {
          return ele === 6;
        }).length,
      "3 of Kind": values.some((ele) => {
        return (
          values.filter((ele2) => {
            return ele === ele2;
          }).length >= 3
        );
      })
        ? values.reduce((total, ele) => {
            return ele + total;
          }, 0)
        : 0,
      "4 of Kind": values.some((ele) => {
        return (
          values.filter((ele2) => {
            return ele === ele2;
          }).length >= 4
        );
      })
        ? values.reduce((total, ele) => {
            return ele + total;
          }, 0)
        : 0,
      "Full House":
        values.some((ele) => {
          return (
            values.filter((ele2) => {
              return ele === ele2;
            }).length === 3
          );
        }) &&
        values.some((ele) => {
          return (
            values.filter((ele2) => {
              return ele === ele2;
            }).length === 2
          );
        })
          ? 25
          : 0,
      "Small Straight":
        this.doesArrayContain(values, [1, 2, 3, 4]) ||
        this.doesArrayContain(values, [2, 3, 4, 5]) ||
        this.doesArrayContain(values, [3, 4, 5, 6])
          ? 30
          : 0,
      "Large Straight":
        this.doesArrayContain(values, [1, 2, 3, 4, 5]) ||
        this.doesArrayContain(values, [2, 3, 4, 5, 6])
          ? 40
          : 0,
      Yahtzee: [...new Set(values)].length === 1 ? 50 : 0,
      Chance: values.reduce((total, ele) => {
        return ele + total;
      }, 0),
    };
    return returnThis;
  };
  updateScore = (e) => {
    const setThisAsScore = this.state.possibleScores[
      e.target.getAttribute("data-id")
    ];
    let category = e.target.getAttribute("data-id");
    if (this.state.clickedCategories.length <= 12) {
      let initialState = [];
      for (let i = 0; i < 5; i++) {
        initialState.push({ id: uuidv4(), isFrozen: false });
      }

      initialState = this.generateRandomValues(initialState);
      this.setState((curState) => {
        return {
          diceValues: initialState,
          rollsRemaining: 2,
          possibleScores: this.updatePossibleScores(initialState),
          score: curState.score + setThisAsScore,
          clickedCategories: [...curState.clickedCategories, category],
        };
      });
    } else {
    }
  };
  startOver = () => {
    let initialState = [];
    for (let i = 0; i < 5; i++) {
      initialState.push({ id: uuidv4(), isFrozen: false });
    }
    initialState = this.generateRandomValues(initialState);
    this.setState({
      diceValues: initialState,
      rollsRemaining: 2,
      possibleScores: this.updatePossibleScores(initialState),
      score: 0,
      clickedCategories: [],
    });
  };
  componentDidMount() {
    let offsetByThisMuch = getComputedStyle(
      document.querySelector(".Yahtzee-fixed")
    ).height;
    document.querySelector(
      ".Yahtzee-notfixed"
    ).style.paddingTop = offsetByThisMuch;
  }
  render() {
    return (
      <div className="Yahtzee">
        <div className="Yahtzee-fixed">
          <h1>Yahtzee</h1>
          <Dice
            diceValues={this.state.diceValues}
            rollDice={this.rollDice}
            freezeDie={this.freezeDie}
            rollsRemaining={this.state.rollsRemaining}
          />
          {this.state.clickedCategories.length <= 12 ? (
            <h2 className="Yahtzee-round">
              Round {this.state.clickedCategories.length + 1}
            </h2>
          ) : (
            ""
          )}
          <h1 className="Yahtzee-score">
            {this.state.clickedCategories.length === 13 ? "Final " : ""}Score:{" "}
            {this.state.score}
          </h1>
          <a href="#Rules" className="Yahtzee-rules">
            Rules
          </a>
        </div>
        <div className="Yahtzee-notfixed">
          <Scoreboard
            possibleScores={this.state.possibleScores}
            updateScore={this.updateScore}
            clickedCategories={this.state.clickedCategories}
            startOver={this.startOver}
          />
          <Rules />
        </div>
      </div>
    );
  }
}

export default Yahtzee;
