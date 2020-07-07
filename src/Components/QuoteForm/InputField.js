import React from "react";

import "./QuoteForm.css";
import Quoted from "../../util/Quoted";

class InputField extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      options: [],
    };

    this.handleChange = this.handleChange.bind(this);
  }

  componentDidMount() {
    this.getOptions();
  }

  handleChange(event) {
    this.props.onChange(event);
  }

  getOptions() {
    switch (this.props.label) {
      case "authors":
        Quoted.allAuthors().then((authors) => {
          return this.setState({ options: authors });
        });
        break;
      default:
        return null;
    }
  }

  renderInput() {
    switch (this.props.inputType) {
      case "textarea":
        return (
          <textarea
            id={this.props.label}
            name={this.props.label}
            rows="10"
            value={this.props.inputValue}
            onChange={this.handleChange}
          ></textarea>
        );
      case "input":
        return (
          <input
            id={this.props.label}
            name={this.props.label}
            className="small"
            value={this.props.inputValue}
            onChange={this.handleChange}
          />
        );
      case "datalist":
        return (
          <div>
            <input
              id={this.props.label}
              name={this.props.label}
              list={`select-${this.props.label}`}
              className="small"
              value={this.props.inputValue}
              onChange={this.handleChange}
            />
            <datalist id={`select-${this.props.label}`}>
              {this.state.options.map((option) => {
                return <option value={option.name} key={option.id}></option>;
              })}
            </datalist>
          </div>
        );
      default:
        return null;
    }
  }

  render() {
    return (
      <li id={this.props.field}>
        <label htmlFor={this.props.label} className="label">
          {this.props.label}
        </label>
        {this.renderInput()}
      </li>
    );
  }
}

export default InputField;
