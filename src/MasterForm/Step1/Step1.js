import React, { Component } from 'react';

class Step1 extends Component {
  render() {
    if (this.props.currentStep !== 1) {
      return null;
    }
    return (
      <div>
        <div className="row">
          <div className="col s12">
            <h1>hello!</h1>
            <h3>we're rake, what's your name?</h3>
          </div>
        </div>
        <div className="row">
          <div className="col s12">
            <div className="input-field">
              <label htmlFor="name">Organization Name</label>
              <input
                id="name"
                name="name"
                type="text"
                className="validate"
                value={this.props.name} // prop: the name input data                
                onChange={this.props.handleChange} //prop: puts data into state                
              />
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default Step1;