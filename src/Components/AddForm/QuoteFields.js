import React from "react";
import InputField from "./InputField";

class QuoteFields extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      input: {
        quote: "",
        author: "",
        year: "",
      },
    };

    this.handleInputChange = this.handleInputChange.bind(this);
  }

  handleInputChange(event) {
    const inputValue = event.target.value;
    const inputName = event.target.name;
    this.setState(
      (prevState) => ({
        input: { ...prevState.input, [inputName]: inputValue },
      }),
      () => {
        this.props.onChange(this.state.input);
      }
    );
  }

  render() {
    return (
      <ul className="form-fields">
        <InputField
          field="quote-text"
          label="quote"
          name="quote"
          inputType="textarea"
          inputValue={this.state.input.quote}
          onChange={this.handleInputChange}
        />
        <li id="quote-attribution">
          <ul className="list-horiz">
            <InputField
              field="author-text"
              inputClass="name"
              label="author"
              name="author"
              inputType="datalist"
              value={this.state.input.author}
              onChange={this.handleInputChange}
            />
            <InputField
              field="year-text"
              inputClass="year"
              label="year"
              name="year"
              inputType="input"
              value={this.state.input.year}
              onChange={this.handleInputChange}
            />
          </ul>
        </li>
      </ul>
    );
  }
}

export default QuoteFields;
