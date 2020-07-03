import React from "react";
import NavItem from "../NavItem/NavItem";
import "./SegmentedControl.css";

class SegmentedControl extends React.Component {
  constructor(props) {
    super(props);

    this.enableQuotes = this.enableQuotes.bind(this);
    this.enableAuthors = this.enableAuthors.bind(this);
  }

  enableQuotes() {
    if (!this.props.quotesMode) {
      this.props.onToggle();
    }
  }

  enableAuthors() {
    if (this.props.quotesMode) {
      this.props.onToggle();
    }
  }

  render() {
    return (
      <nav className="SegmentedControl">
        <ul>
          <NavItem
            name="Quotes"
            isSelected={this.props.quotesMode}
            onClick={this.enableQuotes}
          />
          <NavItem
            name="Authors"
            isSelected={!this.props.quotesMode}
            onClick={this.enableAuthors}
          />
        </ul>
      </nav>
    );
  }
}

export default SegmentedControl;
