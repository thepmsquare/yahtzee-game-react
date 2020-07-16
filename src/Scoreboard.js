import React, { Component } from "react";

import "./stylesheets/Scoreboard.css";

class Scoreboard extends Component {
  render() {
    return (
      <div className="Scoreboard">
        <h2>Upper</h2>
        <div
          onClick={this.props.updateScore}
          data-id="Ones"
          className={
            this.props.clickedCategories.includes("Ones")
              ? "Scoreboard-disabled"
              : ""
          }
        >
          <span className="Scoreboard-category">Ones</span>
          <span className="Scoreboard-score">
            Score 1 for every 1.
            <span className="Scoreboard-curScore">
              +{this.props.possibleScores.Ones}
            </span>
          </span>
        </div>
        <div
          onClick={this.props.updateScore}
          data-id="Twos"
          className={
            this.props.clickedCategories.includes("Twos")
              ? "Scoreboard-disabled"
              : ""
          }
        >
          <span className="Scoreboard-category">Twos</span>
          <span className="Scoreboard-score">
            Score 2 for every 2.
            <span className="Scoreboard-curScore">
              +{this.props.possibleScores.Twos}
            </span>
          </span>
        </div>
        <div
          onClick={this.props.updateScore}
          data-id="Threes"
          className={
            this.props.clickedCategories.includes("Threes")
              ? "Scoreboard-disabled"
              : ""
          }
        >
          <span className="Scoreboard-category">Threes</span>
          <span className="Scoreboard-score">
            Score 3 for every 3.
            <span className="Scoreboard-curScore">
              +{this.props.possibleScores.Threes}
            </span>
          </span>
        </div>
        <div
          onClick={this.props.updateScore}
          data-id="Fours"
          className={
            this.props.clickedCategories.includes("Fours")
              ? "Scoreboard-disabled"
              : ""
          }
        >
          <span className="Scoreboard-category">Fours</span>
          <span className="Scoreboard-score">
            Score 4 for every 4.
            <span className="Scoreboard-curScore">
              +{this.props.possibleScores.Fours}
            </span>
          </span>
        </div>
        <div
          onClick={this.props.updateScore}
          data-id="Fives"
          className={
            this.props.clickedCategories.includes("Fives")
              ? "Scoreboard-disabled"
              : ""
          }
        >
          <span className="Scoreboard-category">Fives</span>
          <span className="Scoreboard-score">
            Score 5 for every 5.
            <span className="Scoreboard-curScore">
              +{this.props.possibleScores.Fives}
            </span>
          </span>
        </div>
        <div
          onClick={this.props.updateScore}
          data-id="Sixes"
          className={
            this.props.clickedCategories.includes("Sixes")
              ? "Scoreboard-disabled"
              : ""
          }
        >
          <span className="Scoreboard-category">Sixes</span>
          <span className="Scoreboard-score">
            Score 6 for every 6.
            <span className="Scoreboard-curScore">
              +{this.props.possibleScores.Sixes}
            </span>
          </span>
        </div>
        <h2>Lower</h2>
        <div
          onClick={this.props.updateScore}
          data-id="3 of Kind"
          className={
            this.props.clickedCategories.includes("3 of Kind")
              ? "Scoreboard-disabled"
              : ""
          }
        >
          <span className="Scoreboard-category">
            3 of Kind
            <span className="Scoreboard-description">If 3+ of one value.</span>
          </span>
          <span className="Scoreboard-score">
            Score sum of all dice.
            <span className="Scoreboard-curScore">
              +{this.props.possibleScores["3 of Kind"]}
            </span>
          </span>
        </div>
        <div
          onClick={this.props.updateScore}
          data-id="4 of Kind"
          className={
            this.props.clickedCategories.includes("4 of Kind")
              ? "Scoreboard-disabled"
              : ""
          }
        >
          <span className="Scoreboard-category">
            4 of Kind
            <span className="Scoreboard-description">If 4+ of one value.</span>
          </span>
          <span className="Scoreboard-score">
            Score sum of all dice.{" "}
            <span className="Scoreboard-curScore">
              +{this.props.possibleScores["4 of Kind"]}
            </span>
          </span>
        </div>
        <div
          onClick={this.props.updateScore}
          data-id="Full House"
          className={
            this.props.clickedCategories.includes("Full House")
              ? "Scoreboard-disabled"
              : ""
          }
        >
          <span className="Scoreboard-category">
            Full House
            <span className="Scoreboard-description">
              If 3 of one value and 2 of another.
            </span>
          </span>
          <span className="Scoreboard-score">
            Score 25.
            <span className="Scoreboard-curScore">
              +{this.props.possibleScores["Full House"]}
            </span>
          </span>
        </div>
        <div
          onClick={this.props.updateScore}
          data-id="Small Straight"
          className={
            this.props.clickedCategories.includes("Small Straight")
              ? "Scoreboard-disabled"
              : ""
          }
        >
          <span className="Scoreboard-category">
            Small Straight
            <span className="Scoreboard-description">
              If 4+ values in a row.
            </span>
          </span>
          <span className="Scoreboard-score">
            Score 30.
            <span className="Scoreboard-curScore">
              +{this.props.possibleScores["Small Straight"]}
            </span>
          </span>
        </div>
        <div
          onClick={this.props.updateScore}
          data-id="Large Straight"
          className={
            this.props.clickedCategories.includes("Large Straight")
              ? "Scoreboard-disabled"
              : ""
          }
        >
          <span className="Scoreboard-category">
            Large Straight
            <span className="Scoreboard-description">
              If 5 values in a row.
            </span>
          </span>
          <span className="Scoreboard-score">
            Score 40.
            <span className="Scoreboard-curScore">
              +{this.props.possibleScores["Large Straight"]}
            </span>
          </span>
        </div>
        <div
          onClick={this.props.updateScore}
          data-id="Yahtzee"
          className={
            this.props.clickedCategories.includes("Yahtzee")
              ? "Scoreboard-disabled"
              : ""
          }
        >
          <span className="Scoreboard-category">
            Yahtzee
            <span className="Scoreboard-description">If all values match.</span>
          </span>
          <span className="Scoreboard-score">
            Score 50.
            <span className="Scoreboard-curScore">
              +{this.props.possibleScores.Yahtzee}
            </span>
          </span>
        </div>
        <div
          onClick={this.props.updateScore}
          data-id="Chance"
          className={
            this.props.clickedCategories.includes("Chance")
              ? "Scoreboard-disabled"
              : ""
          }
        >
          <span className="Scoreboard-category">Chance</span>
          <span className="Scoreboard-score">
            Score sum of all dice.
            <span className="Scoreboard-curScore">
              +{this.props.possibleScores.Chance}
            </span>
          </span>
        </div>

        <hr />
        <button className="Scoreboard-startover" onClick={this.props.startOver}>
          Start Over?
        </button>
      </div>
    );
  }
}

export default Scoreboard;
