import React from "react";
import "./NavItem.css";

class NavItem extends React.Component {
  constructor(props) {
    super(props);

    this.handleClick = this.handleClick.bind(this);
    this.handleKeyDown = this.handleKeyDown.bind(this);
  }

  handleClick() {
    this.props.onClick();
  }

  handleKeyDown(event) {
    if (event.key === "Enter") {
      event.preventDefault();
      event.stopPropagation();
      this.props.onClick();
    }
  }

  render() {
    if (this.props.isSelected) {
      return (
        <li
          className="NavItem selected"
          tabIndex={0}
          onClick={this.handleClick}
          onKeyDown={this.handleKeyDown}
        >
          {this.props.name}
          <span className="selector"></span>
        </li>
      );
    } else {
      return (
        <li
          className="NavItem"
          onClick={this.handleClick}
          tabIndex={0}
          onKeyDown={this.handleKeyDown}
        >
          {this.props.name}
        </li>
      );
    }
  }
}

export default NavItem;
