import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import Header from './Header/Header';
import Home from './Home/Home';
import Dice from './Dice/Dice';
import SignUp from './SignUp/SignUp';

class App extends Component {
  render() {
    return (
      <div id="app" className="container">
        <Router>
          <header>
            <Header />
          </header>
          <Switch>
            <Route path="/" exact component={Home} />
            <Route path="/dice" exact component={Dice} />
            <Route path="/signup" exact component={SignUp} />
            <Route path="/" render={() => <div>404</div>} />
          </Switch>
        </Router>
      </div>
    );
  }
}

export default App;
