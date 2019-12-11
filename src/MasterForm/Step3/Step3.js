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
              <h5>because ideas are fun, raising funds for them aren't. we believe communities can be self-sustaining. rake provides a mutual incentive for everyone involved towards a common goal.
              </h5>
              <h5>why does your organization exist?</h5>
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