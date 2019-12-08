import React from 'react';
import { Link } from 'react-router-dom';

import './Header.scss';

const header = () => {
  return (
    <div id="header">
      <div className="row">
        <div className="col s6">
          <Link to="/"><img id="logo-small" src={require('./logo-small.png')} alt="logo small" /></Link>
        </div>
        <div className="col s6">
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
            <img id="menu" src={require('./menu.png')} alt="hamburger icon" />
          </a>
        </div>
      </div>
    </div>
  )
};

export default header;