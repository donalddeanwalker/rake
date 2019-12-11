import React from 'react';

import './Dice.scss';

const dice = () => {
  return (
    <div id="dice" className="body-main">
      <div className="row center-align">
        <div className="score">let's roll</div>
        <div className="scene">
          <div className="dice-display">
            <div className="dice dice-one idle">
              <div className="face face-front">
                <div className="front-pip-1">⬤</div>
                <div className="front-pip-2">⬤</div>
                <div className="front-pip-3">⬤</div>
              </div>
              <div className="face face-back">
                <div className="back-pip-1">⬤</div>
                <div className="back-pip-2">⬤</div>
                <div className="back-pip-3">⬤</div>
                <div className="back-pip-4">⬤</div>
              </div>
              <div className="face face-right">
                <div className="right-pip-1">⬤</div>
                <div className="right-pip-2">⬤</div>
                <div className="right-pip-3">⬤</div>
                <div className="right-pip-4">⬤</div>
                <div className="right-pip-5">⬤</div>
              </div>
              <div className="face face-left">
                <div className="left-pip-1">⬤</div>
                <div className="left-pip-2">⬤</div>
              </div>
              <div className="face face-top">
                <div className="top-pip-1">⬤</div>
                <div className="top-blank-1"></div>
                <div className="top-blank-2"></div>
              </div>
              <div className="face face-bottom">
                <div className="bottom-pip-1">⬤</div>
                <div className="bottom-pip-2">⬤</div>
                <div className="bottom-pip-3">⬤</div>
                <div className="bottom-pip-4">⬤</div>
                <div className="bottom-pip-5">⬤</div>
                <div className="bottom-pip-6">⬤</div>
              </div>
            </div>
          </div>
          <div className="dice-display">
            <div className="dice dice-two idle">
              <div className="face face-front">
                <div className="front-pip-1">⬤</div>
                <div className="front-pip-2">⬤</div>
                <div className="front-pip-3">⬤</div>
              </div>
              <div className="face face-back">
                <div className="back-pip-1">⬤</div>
                <div className="back-pip-2">⬤</div>
                <div className="back-pip-3">⬤</div>
                <div className="back-pip-4">⬤</div>
              </div>
              <div className="face face-right">
                <div className="right-pip-1">⬤</div>
                <div className="right-pip-2">⬤</div>
                <div className="right-pip-3">⬤</div>
                <div className="right-pip-4">⬤</div>
                <div className="right-pip-5">⬤</div>
              </div>
              <div className="face face-left">
                <div className="left-pip-1">⬤</div>
                <div className="left-pip-2">⬤</div>
              </div>
              <div className="face face-top">
                <div className="top-pip-1">⬤</div>
                <div className="top-blank-1"></div>
                <div className="top-blank-2"></div>
              </div>
              <div className="face face-bottom">
                <div className="bottom-pip-1">⬤</div>
                <div className="bottom-pip-2">⬤</div>
                <div className="bottom-pip-3">⬤</div>
                <div className="bottom-pip-4">⬤</div>
                <div className="bottom-pip-5">⬤</div>
                <div className="bottom-pip-6">⬤</div>
              </div>
            </div>
          </div>
        </div>
        <div className="col s12 controls center">
          <button id="roll" className="waves-effect waves-light btn-large dice-btn">Roll</button>
        </div>
      </div>
    </div>
  )
}

export default dice;
