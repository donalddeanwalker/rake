import React, { Component } from 'react';

class Step2 extends Component {
  render() {
    if (this.props.currentStep !== 2) {
      return null;
    }

    return (
      <div>
        <div className="row">
          <div className="col s12">
            <h1>what</h1>
            <h5>rake is a tool for communities to raise funds for small projects (e.g. supplies, books, workers, etc..).  rake turns the act of donating into a game between donors.
              </h5>
            <h5>what is your goal?</h5>
          </div>
          <div className="input-field col s12">
            <label htmlFor="goal">organization goal</label>
            <input
              className="validate"
              id="goal"
              name="goal"
              type="text"
              value={this.props.goal} // prop: the goal input data
              onChange={this.props.handleChange} //prop: puts data into state
            />
          </div>
        </div>
      </div>
    )
  }
}

export default Step2;