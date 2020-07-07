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
    if (!this.props.formError) {
      if (this.props.submitted) {
        return (
          <button id="return" onClick={this.handleReturn}>
            {`return to ${this.props.formObj}s`}
          </button>
        );
      } else {
        return (
          <button id="submit-quote" onClick={this.handleSubmit}>
            {`submit ${this.props.formObj}`}
          </button>
        );
      }
    }
    return null;
  }
}

export default SubmitButton;
