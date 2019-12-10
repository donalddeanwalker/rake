import React, { Component } from 'react';

class Step3 extends Component {
  render() {
    if (this.props.currentStep !== 3) {
      return null;
    }

    return (
      <div>
          <div className="row">
            <div className="col s12">
              <h1>why</h1>
              <h5>because we believe communities can be self-sustaining. besides, ideas are fun, raising funds for them aren't. rake provides a mutual incentive towards a common goal.
              </h5>
              <h5>why are you doing what you do?</h5>
            </div>
            <div className="input-field col s12">
              <label htmlFor="email">organization url</label>
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
      </div>
    )
  }
}

export default Step3;