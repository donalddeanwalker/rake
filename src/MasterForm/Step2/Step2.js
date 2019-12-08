import React, { Component } from 'react';

class Step2 extends Component {
  render() {
    if (this.props.currentStep !== 2) {
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
              <label htmlFor="goal">Organization Name</label>
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
        </form>
      </div>
    )
  }
}

export default Step2;