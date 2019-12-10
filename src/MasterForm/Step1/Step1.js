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
            <h1>who</h1>
            <h5>we're rake!</h5>
            <h5>who are you?</h5>
          </div>
        </div>
        <div className="row">
          <div className="col s12">
            <div className="input-field">
              <label htmlFor="name">organization name</label>
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