import React, { Component } from 'react';

class Step3 extends Component {
  render() {
    if (this.props.currentStep !== 3) {
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
              <label htmlFor="email">Organization Goal</label>
              <input 
                className="validate"
                id="email" 
                name="email"
                type="text"
                value={this.props.email} // prop: the email input data
                onChange={this.props.handleChange} //prop: puts data into state
              />           
            </div>
          </div>
        </form>
      </div>
    )
  }
}

export default Step3;