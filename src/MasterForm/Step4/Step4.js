import React, { Component } from 'react';

class Step4 extends Component {
  render() {
    if (this.props.currentStep !== 4) {
      return null;
    }

    return (
      <div>
        <form>
          <div className="row">
            <div className="col s12">
              <h1>hello!</h1>
              <h3>we're rake, what's your name?</h3>
            </div>
            <div className="input-field col s12">
              <label htmlFor="address">Organization Address</label>
              <input 
                className="validate"
                id="address" 
                name="address"
                type="text"
                value={this.props.address} // prop: the address input data
                onChange={this.props.handleChange} //prop: puts data into state
              />   
              <button class="btn waves-effect waves-light right">Submit
                <i class="material-icons right">send</i>
              </button>
            </div>
          </div>
        </form>
      </div>
    )
  }
}

export default Step4;