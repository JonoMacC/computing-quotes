import React from "react";
import InputField from "./InputField";

class AuthorFields extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      input: {
        name: "",
        bio: "",
        dob: "",
        dod: "",
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
          field="author-name"
          className="name"
          label="name"
          name="name"
          inputType="input"
          value={this.state.input.name}
          onChange={this.handleInputChange}
        />
        <InputField
          field="author-bio"
          label="bio"
          name="bio"
          inputType="textarea"
          inputValue={this.state.input.bio}
          onChange={this.handleInputChange}
        />
        <li id="quote-attribution">
          <ul className="list-horiz">
            <InputField
              field="author-dob"
              inputClass="year"
              label="year of birth"
              name="dob"
              inputType="input"
              value={this.state.input.dob}
              onChange={this.handleInputChange}
            />
            <InputField
              field="author-dod"
              inputClass="year"
              label="year of death"
              name="dod"
              inputType="input"
              value={this.state.input.dod}
              onChange={this.handleInputChange}
            />
          </ul>
        </li>
      </ul>
    );
  }
}

export default AuthorFields;
