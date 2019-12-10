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
              <h1>how</h1>
              <h5>utilizing ethereum's blockchain, we can leverage smart contracts to escrow and transact donors funds to their community. participating communities must stake 25% of their goal. this helps organizations set realistic goals.  </h5>
              <h5>how much would you like to stake?</h5>
            </div>
            <div className="input-field col s12">
              <label htmlFor="address">$USD</label>
              <input 
                className="validate"
                id="address" 
                name="address"
                type="text"
                value={this.props.address} // prop: the address input data
                onChange={this.props.handleChange} //prop: puts data into state
              />   
              <button 
                className="btn-large waves-effect waves-light full"
                >Submit
                <i className="material-icons right">send</i>
              </button>
            </div>
          </div>
      </div>
    )
  }
}

export default Step4;