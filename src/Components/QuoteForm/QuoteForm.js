import React from "react";
import { ReactComponent as CloseIcon } from "../Icons/close.svg";
import { ReactComponent as CheckIcon } from "../Icons/check.svg";

import "./QuoteForm.css";
import Quoted from "../../util/Quoted";
import SubmitButton from "./SubmitButton";

const ErrorMessage = (isError, message) => {
  if (!isError) {
    return null;
  } else {
    return <p>{message}</p>;
  }
};

class QuoteForm extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      quoteText: "",
      author: "",
      year: "",
      quote: {},
      submitted: false,
      formError: false,
      errorMessage: "",
    };

    this.handleClose = this.handleClose.bind(this);
    this.handleTextChange = this.handleTextChange.bind(this);
    this.handleAuthorChange = this.handleAuthorChange.bind(this);
    this.handleYearChange = this.handleYearChange.bind(this);
    this.addQuote = this.addQuote.bind(this);
  }

  resetForm() {
    this.setState({
      quoteText: "",
      author: "",
      year: "",
      quote: {},
      submitted: false,
      formError: false,
      errorMessage: "",
    });
  }

  handleClose() {
    this.resetForm();
    this.props.onClose();
  }

  handleTextChange(event) {
    this.setState({ quoteText: event.target.value });
  }

  handleAuthorChange(event) {
    this.setState({ author: event.target.value });
  }

  handleYearChange(event) {
    this.setState({ year: event.target.value });
  }

  addQuote() {
    const quoteText = this.state.quoteText;
    const author = this.state.author;
    const year = this.state.year;

    Quoted.add(quoteText, author, year)
      .then((quote) => {
        return this.setState({ submitted: true, quote: quote });
      })
      .catch((error) => {
        return this.setState({
          formError: true,
          errorMessage: error.message,
        });
      });
  }

  renderFormFields() {
    if (this.state.submitted) {
      return (
        <ul>
          <li id="success">
            <CheckIcon id="checkmark" />
          </li>
          <li>
            <p>Congrats, your quote was added!</p>
          </li>
        </ul>
      );
    } else {
      return (
        <ul className="form-fields">
          <li id="quote-text">
            <label htmlFor="quote" className="label">
              Quote
            </label>
            <textarea
              id="quote"
              name="quote"
              rows="10"
              value={this.state.quoteText}
              onChange={this.handleTextChange}
            ></textarea>
          </li>
          <li id="quote-attribution">
            <ul className="list-horiz">
              <li id="author-text">
                <label htmlFor="person-choice" className="label">
                  Author
                </label>
                <input
                  list="person"
                  id="person-choice"
                  name="person-choice"
                  className="small"
                  value={this.state.author}
                  onChange={this.handleAuthorChange}
                />
                <datalist id="person">
                  <option value="Ellen Ullman"> </option>
                  <option value="Alan Turing"> </option>
                </datalist>
              </li>
              <li id="year-text">
                <label htmlFor="year" className="label">
                  Year
                </label>
                <input
                  id="year"
                  name="year"
                  className="small"
                  value={this.state.year}
                  onChange={this.handleYearChange}
                />
              </li>
            </ul>
          </li>
          <li>{ErrorMessage(this.state.formError, this.state.errorMessage)}</li>
        </ul>
      );
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
              <span className="form-title">add quote</span>
              <button
                id="close"
                className="icon right"
                onClick={this.handleClose}
              >
                <CloseIcon />
              </button>
            </div>
            {this.renderFormFields()}
            <SubmitButton
              submitted={this.state.submitted}
              onReturn={this.handleClose}
              onSubmit={this.addQuote}
            />
          </div>
        </div>
      </div>
    );
  }
}

export default QuoteForm;
