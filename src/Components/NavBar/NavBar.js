import React from "react";
import NavItem from "../NavItem/NavItem";
import "./NavBar.css";

class NavBar extends React.Component {
  render() {
    return (
      <nav className="NavBar">
        <ul>
          <NavItem name="Quotes" isSelected={true} />
          <NavItem name="Authors" isSelected={false} />
        </ul>
      </nav>
    );
  }
}

export default NavBar;
