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

  getSelected() {
    if (this.props.isSelected) {
      return "selected";
    }
    return "";
  }

  render() {
    return (
      <li
        className={`NavItem ${this.getSelected()}`}
        tabIndex={0}
        onClick={this.handleClick}
        onKeyDown={this.handleKeyDown}
      >
        {this.props.name}
      </li>
    );
  }
}

export default NavItem;
