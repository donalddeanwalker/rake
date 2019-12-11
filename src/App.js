import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import Header from './Header/Header';
import Home from './Home/Home';
import Dice from './Dice/Dice';
import MasterForm from './MasterForm/MasterForm';

// Smart Contract 
import CounterContract from "./contracts/Counter.json";
import getWeb3 from "./getWeb3";


class App extends Component {
  // state = { web3: null, accounts: null, contract: null };

  // componentDidMount = async () => {
  //   try {
  //     // Get network provider and web3 instance.
  //     const web3 = await getWeb3();

  //     // Use web3 to get the user's accounts.
  //     const accounts = await web3.eth.getAccounts();
  //     console.log(accounts);

  //     // Get the contract instance.
  //     const networkId = await web3.eth.net.getId();
  //     const deployedNetwork = CounterContract.networks[networkId];
  //     const instance = new web3.eth.Contract(
  //       CounterContract.abi,
  //       deployedNetwork && deployedNetwork.address,
  //     );

  //     // Set web3, accounts, and contract to the state, and then proceed with an
  //     // example of interacting with the contract's methods.
  //     this.setState({ web3, accounts, contract: instance });
  //   } catch (error) {
  //     // Catch any errors for any of the above operations.
  //     alert(
  //       `Failed to load web3, accounts, or contract. Check console for details.`,
  //     );
  //     console.error(error);
  //   }
  // };

  // increment = async () => {
  //   const instance = this.state.contract
  //   const accounts = this.state.accounts
  //   await instance.methods.increment().send({ from: accounts[0] });
  // }

  // count = async () => {
  //   const instance = this.state.contract
  //   const count = await instance.methods.count().call();
  //   console.log(count)
  // }

  render() {
    // if (!this.state.web3) {
    //   return <div>Loading Web3, accounts, and contract...</div>;
    // }
    return (
      <div id="app" className="container">
        <Router>
          <header>
            <Header />
          </header>
          <main>
            <Switch>
              <Route path="/" exact component={Home} />
              <Route path="/dice" exact component={Dice} />
              <Route path="/masterform" exact component={MasterForm} />
              <Route path="/" render={() => <div>404</div>} />
            </Switch>
            {/* <div className="App">
              <h1>Good to Go!</h1>
              <p>Your Truffle Box is installed and ready.</p>
              <h2>Smart Contract Example</h2>
              <button onClick={() => this.increment()}> Increment </button>
              <button onClick={() => this.count()}> getCount </button>
            </div> */}
          </main>
        </Router>
      </div>
    );
  }
}

export default App;
