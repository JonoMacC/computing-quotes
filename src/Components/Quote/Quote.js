import React from "react";
import "./Quote.css";

import Quoted from "../../util/Quoted";

class Quote extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      personName: "",
    };
  }

  // After the component has mounted, call the getName() method
  // to get the name of the quote's author
  componentDidMount() {
    this.getName();
  }

  // Use the personId prop to get the quote's author and assign it
  // to the component's state
  getName() {
    Quoted.getAuthorNameById(this.props.personId).then((personName) => {
      return this.setState({ personName: personName });
    });
  }

  render() {
    return (
      <li className="Quote">
        <p>{this.props.text}</p>
        <ul className="Attribution">
          <li>{this.state.personName}</li>
          <li>{this.props.year}</li>
        </ul>
      </li>
    );
  }
}

export default Quote;
