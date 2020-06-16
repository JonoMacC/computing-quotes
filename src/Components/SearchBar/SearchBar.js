import React from "react";
import "./SearchBar.css";
import { ReactComponent as SearchIcon } from "../Icons/search.svg";

class SearchBar extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      term: "",
    };

    this.search = this.search.bind(this);
    this.handleTermChange = this.handleTermChange.bind(this);
    this.handleKeyDown = this.handleKeyDown.bind(this);
  }

  search() {
    this.props.onSearch(this.state.term);
  }

  // Update the state whenever the input value changes
  handleTermChange(event) {
    this.setState({ term: event.target.value });
  }

  // Execute search when "Enter" is pressed on the keyboard
  // within the search field
  handleKeyDown(event) {
    if (event.key === "Enter") {
      event.preventDefault();
      event.stopPropagation();
      this.search();
    }
  }

  render() {
    return (
      <div className="Control-bar">
        <div className="Search-bar">
          <input
            id="author"
            placeholder="Search by author"
            onChange={this.handleTermChange}
            onKeyDown={this.handleKeyDown}
          />
          <button id="fetch-by-author" className="icon" onClick={this.search}>
            <SearchIcon />
          </button>
        </div>
        <div className="Control-cover"></div>
      </div>
    );
  }
}

export default SearchBar;
