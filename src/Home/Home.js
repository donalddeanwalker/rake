import React from 'react';

import './Home.scss';

const body = ({ history }) => {
  return (
    <div className="body-main">
      <div className="row">
        <div id="precise" className="col s12">
          <div id="cube">
            <div className="face2 one materialize-red lighten-1">
              <div className="col s12 left-align dot-3">⬤</div>
              <div className="col s12 center-align dot-3">⬤</div>
              <div className="col s12 right-align dot-3">⬤</div>
            </div>
            <div className="face2 two green lighten-1">
              <div className="col s6 dot-4 nudge-top">⬤</div>
              <div className="col s6 right-align dot-4 nudge-top">⬤</div>
              <div className="col s6 dot-4 space-top">⬤</div>
              <div className="col s6 right-align dot-4 space-top">⬤</div>
            </div>
            <div className="face2 three orange lighten-1">
              <div className="col s6 dot-5 nudge-top">⬤</div>
              <div className="col s6 right-align dot-5 nudge-top">⬤</div>
              <div className="col s12 center-align dot-5">⬤</div>
              <div className="col s6 dot-5">⬤</div>
              <div className="col s6 right-align dot-5">⬤</div>
            </div>
            <div className="face2 four teal lighten-1 center-align dot-1">
              <span className="dot-1-1">⬤</span>
            </div>
            <div className="face2 five yellow lighten-1">
              <div className="col s12 right-align dot-2 nudge-top">⬤</div>
              <div className="col s12 left-align dot-2 space-top">⬤</div>
            </div>
            <div className="face2 six light-blue lighten-1">
              <div className="col s6 dot-6 left-align nudge-top">⬤</div>
              <div className="col s6 dot-6 right-align nudge-top">⬤</div>
              <div className="col s6 dot-6 left-align">⬤</div>
              <div className="col s6 dot-6 right-align">⬤</div>
              <div className="col s6 dot-6 left-align">⬤</div>
              <div className="col s6 dot-6 right-align">⬤</div>
            </div>
          </div>
        </div>
      </div>
      <div className="row">
        <div className="col s8 offset-s2 m12 center-align">
          <img className="responsive-img" id="logo" src={require('./logo.png')} alt="Logo" />
        </div>
      </div>
      <div className="row">
        <div className="col s6 right-align">
          <button
            onClick={() => {
              history.push('./masterform')
            }}
            className="waves-effect waves-light btn-large">sign up</button>
        </div>
        <div className="col s6">
          <button
            onClick={() => {
              history.push('/dice')
            }}
            className="waves-effect waves-light btn-large">play it
            </button>
        </div>
      </div>
    </div>
  )
}

export default body;