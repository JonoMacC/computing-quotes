import React from "react";
import { ReactComponent as CloseIcon } from "../Icons/close.svg";
import { ReactComponent as CheckIcon } from "../Icons/check.svg";

import "./AddForm.css";
import SubmitButton from "./SubmitButton";
import QuoteFields from "./QuoteFields";
import AuthorFields from "./AuthorFields";

import Quoted from "../../util/Quoted";

const ErrorMessage = (isError, message) => {
  if (isError) {
    return <p>{message}</p>;
  }
};

class AddForm extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      input: {},
      submitted: false,
      formError: false,
    };

    this.handleClose = this.handleClose.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  // On close, reset the form properties to their initial state
  handleClose() {
    this.setState(
      {
        input: {},
        submitted: false,
        formError: false,
      },
      () => {
        this.props.onClose();
      }
    );
  }

  // Update the input object with the input from the form fields
  handleChange(input) {
    this.setState({ input: input });
  }

  // Determine which utility function to use based on the type of form
  // The utility function is passed to the generic addInput function
  handleSubmit() {
    if (this.props.formObj === "quote") {
      this.addInput(Quoted.addQuote);
    } else if (this.props.formObj === "author") {
      this.addInput(Quoted.addAuthor);
    }
  }

  // Add the user provided input to the appropriate list of objects
  // The correct utility function is received from the submit handler
  // The values of the input object are provided as arguments for the
  // utility function.
  addInput(addFn) {
    addFn(...Object.values(this.state.input))
      .then((input) => {
        return this.setState({ submitted: true, input: input });
      })
      .catch((error) => {
        return this.setState({
          formError: true,
          errorMessage: error.message,
        });
      });
  }

  // If the form was submitted, display a success message
  // otherwise return form fields based on the type of form requested
  renderFormFields() {
    if (this.state.submitted) {
      return (
        <ul>
          <li id="success">
            <CheckIcon id="checkmark" />
          </li>
          <li>
            <p>Congrats, your {this.props.formObj} was added!</p>
          </li>
        </ul>
      );
    } else if (this.props.formObj === "quote") {
      return <QuoteFields onChange={this.handleChange} />;
    } else if (this.props.formObj === "author") {
      return <AuthorFields onChange={this.handleChange} />;
    }
  }

  render() {
    // Render nothing if the "show" prop is false
    if (!this.props.show) {
      return null;
    }

    return (
      <div className="modal">
        <div className="form-container">
          <div className="form-body">
            <div id="form-header" className="list-horiz">
              <span className="form-title">add {this.props.formObj}</span>
              <button
                id="close"
                className="icon right"
                onClick={this.handleClose}
              >
                <CloseIcon />
              </button>
            </div>
            {this.renderFormFields()}
            {ErrorMessage(this.state.formError, this.state.errorMessage)}
            <SubmitButton
              submitted={this.state.submitted}
              onReturn={this.handleClose}
              onSubmit={this.handleSubmit}
              formObj={this.props.formObj}
              formError={this.state.formError}
            />
          </div>
        </div>
      </div>
    );
  }
}

export default AddForm;
