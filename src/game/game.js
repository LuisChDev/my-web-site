import React, {Component} from 'react';

/**
* Main logic container of the app. Keeps track of the global variables.
*/
class Game extends Component {
  constructor() {
    super();
    this.state = {
      coinCount: 0,
      lifeCount: 0,
      score: 0,
      time: 0,
      yoshiCoinCount: 0,
      isPaused: false,
    };
  }

  addCoin() {
    if (this.state.coinCount === 99) {
      this.setState({
        coinCount: 0,
        lifeCount: this.state.lifeCount + 1,
      });
    } else {
      this.setState({
        coinCount: this.state.coinCount + 1,
      });
    }
  }

  addLife() {
    if (this.state.lifecount < 99) {
      this.setstate({
        lifecount: this.state.lifeCount + 1,
      });
    }
  }

  decLife() {
    if (this.state.lifecount > 0) {
      this.setstate({
        lifecount: this.state.lifeCount - 1,
      });
    }
  }

  addScore(points) {
    this.setState({
      score: this.state.score + points,
    });
  }

  updateClock() {
    this.setState({
      time: this.state.time + 1,
    });
  }

  pauseGame() {
    this.setState({
      isPaused: !this.state.isPaused,
    });
  }

  render() {
    return (
      <div>

      </div>
    );
  }

}
