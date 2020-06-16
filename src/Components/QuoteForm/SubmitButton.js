import React from "react";

class SubmitButton extends React.Component {
  constructor(props) {
    super(props);

    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleReturn = this.handleReturn.bind(this);
  }

  handleSubmit() {
    this.props.onSubmit();
  }

  handleReturn() {
    this.props.onReturn();
  }

  render() {
    if (this.props.submitted) {
      return (
        <button id="return" onClick={this.handleReturn}>
          return to quotes
        </button>
      );
    } else {
      return (
        <button id="submit-quote" onClick={this.handleSubmit}>
          submit quote
        </button>
      );
    }
  }
}

export default SubmitButton;
