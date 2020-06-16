import React from "react";
import "./NavItem.css";

class NavItem extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      isSelected: this.props.isSelected,
    };
  }

  render() {
    if (this.state.isSelected) {
      return (
        <li className="NavItem selected">
          {this.props.name}
          <span className="selector"></span>
        </li>
      );
    } else {
      return <li className="NavItem">{this.props.name}</li>;
    }
  }
}

export default NavItem;
