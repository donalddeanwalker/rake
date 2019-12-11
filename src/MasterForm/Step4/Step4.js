import React, { Component } from 'react';

class Step4 extends Component {
  render() {
    if (this.props.currentStep !== 4) {
      return null;
    }

    return (
      <div>
          <div className="row">
            <div className="col s12">
              <h1>where</h1>
              <h5>we live on the blockchain. we feel safe here (for obvious reasons). all funds are escrowed on the blockchain via a public address governed by code.  CODE IS LAW according to rake. logic and math is god. no human being will ever be in control of your funds.</h5>
              <h5>where will we transfer your funds when your goal is met?</h5>
            </div>
            <div className="input-field col s12">
              <label htmlFor="address">organization ETH address</label>
              <input 
                className="validate"
                id="address" 
                name="address"
                type="text"
                value={this.props.address} // prop: the address input data
                onChange={this.props.handleChange} //prop: puts data into state
              />   
            </div>
          </div>
      </div>
    )
  }
}

export default Step4;