import React from 'react';
import { Link } from 'react-router-dom';

import './Header.scss';

const header = () => {
  return (
      <div>
        <div className="row">
          <div className="col s6">
            {/* Begin Logo Small */}
            <div id="home-logo" className="z-depth-1 circle">
              <div id="logo-small">
                <Link to="/"><img src={require('./logo-home.svg')} alt="logo small" /></Link>
              </div>
            </div>
          </div>
          <div className="col s6">
            {/* Begin Side Nav */}
            <ul id="slide-out" className="sidenav right">
              <nav>
                <div className="nav-wrapper">
                  <form>
                    <div className="input-field">
                      <input id="search" type="search" required></input>
                      <label className="label-icon" htmlFor="search"><i className="material-icons">search</i></label>
                      <i className="material-icons">close</i>
                    </div>
                  </form>
                </div>
              </nav>
              <li><a className="subheader" href="#!">Select An Org Below To Get Started!</a></li>
              <li><a className="waves-effect" href="#!">Org name displays here</a></li>
              <li><a className="waves-effect" href="#!">Org name displays here</a></li>
              <li><a className="waves-effect" href="#!">Org name displays here</a></li>
              <li><a className="waves-effect" href="#!">Org name displays here</a></li>
              <li><a className="waves-effect" href="#!">Org name displays here</a></li>
              <li><a className="waves-effect" href="#!">Org name displays here</a></li>
            </ul>
            <a href="#!" data-target="slide-out" className="sidenav-trigger right">
              <div id="menu">
                ▲
                <div id="hamburger">
                  <img src={require('./hamburger.svg')} alt="hamburger icon" />
                </div>
              </div>
            </a>
          </div>
        </div>
      </div>
  )
};

export default header;