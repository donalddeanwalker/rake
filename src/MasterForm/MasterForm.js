import React, { Component, Fragment } from 'react';

import './MasterForm.scss';
import Step1 from './Step1/Step1';
import Step2 from './Step2/Step2';
import Step3 from './Step3/Step3';
import Step4 from './Step4/Step4';
import Step5 from './Step5/Step5';

class MasterForm extends Component {
  constructor(props) {
    super(props)
    // Set initial input values
    this.state = {
      currentStep: 1, // Default is Step 1
      email: '',
      name: '',
      goal: '',
      stake: '',
      address: ''
    }
    // Bind the submission to handleChange()
    this.handleChange = this.handleChange.bind(this);

    // Bind new functions for next and previous
    this._next = this._next.bind(this)
    this._prev = this._prev.bind(this)
  }

  // Use the submitted data to set the state
  handleChange = (event) => {
    const { name, value } = event.target
    this.setState({
      [name]: value
    })
  }

  // Trigger an alert on form submission
  handleSubmit = (event) => {
    event.preventDefault()
    const { email, name, goal, stake, address } = this.state
    alert(`Your registration detail: \n 
      Email: ${email} \n 
      Name: ${name} \n
      Goal: ${goal} \n
      Stake: ${stake} \n
      Address: ${address}`)
  }

  // Test current step with ternary
  // _next and _previous functions will be called on button click
  _next() {
    let currentStep = this.state.currentStep
    // If the current step is 1 or more  then add on one "next" button click
    currentStep = currentStep >= 4 ? 5 : currentStep + 1
    this.setState({
      currentStep: currentStep
    })
  }

  _prev() {
    let currentStep = this.state.currentStep
    // If the current step is 2 or more then subtract one on "previous" button click
    currentStep = currentStep <= 1 ? 1 : currentStep - 1
    this.setState({
      currentStep: currentStep
    })
  }

  // The "next" and "previous" button functions
  get previousButton() {
    let currentStep = this.state.currentStep;
    // If the current step is not the first or last step, then render the "previous" button
    if (currentStep !== 1 && currentStep !== 5) {
      return (
        <button
          className="waves-effect waves-light btn-large btn-secondary wide"
          type="button" onClick={this._prev}>
          Previous
        </button>
      )
    }
    // ...else return nothing
    return null;
  }

  get nextButton() {
    let currentStep = this.state.currentStep;
    // If the current step is not 1, then render the "next" button
    if (currentStep < 5) {
      return (
        <button
          className="waves-effect waves-light btn-large btn-primary wide right"
          type="button" onClick={this._next}>
          Continue
        </button>
      )
    }
    // ...else render nothing
    return null;
  }

  render() {
    return (
      <div>

        <div className="row">
          <div className="col s12 l10">
            <Fragment>
              {this.state.currentHeader}
    
              <form onSubmit={this.handleSubmit}>
    
                <Step1
                  currentStep={this.state.currentStep}
                  handleChange={this.handleChange}
                  name={this.state.name}
                />
                <Step2
                  currentStep={this.state.currentStep}
                  handleChange={this.handleChange}
                  goal={this.state.goal}
                />
                <Step3
                  currentStep={this.state.currentStep}
                  handleChange={this.handleChange}
                  email={this.state.email}
                />
                <Step4
                  currentStep={this.state.currentStep}
                  handleChange={this.handleChange}
                  address={this.state.address}
                />
                <Step5
                  currentStep={this.state.currentStep}
                  handleChange={this.handleChange}
                  stake={this.state.stake}
                />
    
                {this.previousButton}
                {this.nextButton}
    
              </form>
    
            </Fragment>
          </div>
        </div>

      </div>
    )
  }
}

export default MasterForm;