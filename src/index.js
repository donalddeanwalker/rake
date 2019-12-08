import React from 'react';
import ReactDOM from 'react-dom';

import './index.css';
import App from './App';
import './materialize.min.css'
// Import Materialize
import M from "materialize-css";
import * as serviceWorker from './serviceWorker';

ReactDOM.render(<App />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();

// Initialize Materialize components
document.addEventListener('DOMContentLoaded', () => {
  M.AutoInit();
  let elems = document.querySelectorAll('.sidenav');
  let instances = M.Sidenav.init(elems, {
    edge: 'right',
    draggable: 'true'
  });
});

// Initialize Dice Component
const INITIAL_TRANSFORM_STATE = 'idle';

var roll = function () {
  let sides = 6;
  return Math.floor(sides * Math.random()) + 1;
};

const view = {
  roll: document.getElementById('roll'),
  dice1: { o: document.querySelector('.dice-one'), state: INITIAL_TRANSFORM_STATE },
  dice2: { o: document.querySelector('.dice-two'), state: INITIAL_TRANSFORM_STATE },
  score: document.querySelector('.score'),

  updateDice: function (results) {
    handleDiceAnimation(this.dice1);
    handleDiceAnimation(this.dice2);

    setTimeout(() => {
      showResult(this.dice1, results[0]);
      showResult(this.dice2, results[1]);
    }, 820)
  },
  updateScore: function (message) {
    this.score.textContent = message;
  },
};

const game = {
  turn: function () {
    let rollResult = [roll(), roll()];
    let resultSorted = [...rollResult].sort(); // sort results and return new array
    view.updateDice(rollResult);
    setTimeout(() => {
      view.updateScore(this.getScore(resultSorted));
    }, 1000);
  },
  getScore: function (results) {
    let message = results.reduce((a, b) => a + b, 0);
    return message;
  },
};

const el = view.roll;
if (el) {
  view.roll.addEventListener('click', () => game.turn(), false);
}

var handleDiceAnimation = dice => {
  if (dice.state === 'idle') {
    dice.o.classList.remove('idle');
  }

  dice.o.classList.remove('spin');
  void dice.o.offsetWidth;
  dice.o.classList.add('spin');
}

var showResult = (dice, value) => {
  dice.o.classList.remove(dice.state);
  void dice.o.offsetWidth;

  if (value === 1) {
    dice.o.classList.add('show-top');
    dice.state = 'show-top';
  } else if (value === 2) {
    dice.o.classList.add('show-left');
    dice.state = 'show-left';
  } else if (value === 3) {
    dice.o.classList.add('show-front');
    dice.state = 'show-front';
  } else if (value === 4) {
    dice.o.classList.add('show-back');
    dice.state = 'show-back';
  } else if (value === 5) {
    dice.o.classList.add('show-right');
    dice.state = 'show-right';
  } else if (value === 6) {
    dice.o.classList.add('show-bottom');
    dice.state = 'show-bottom';
  }
}
