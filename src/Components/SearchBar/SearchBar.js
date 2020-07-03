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

  // Redo search if there is a term in the search field and
  // the user has changed modes
  componentDidUpdate(prevProps) {
    if (this.props.quotesMode !== prevProps.quotesMode && this.state.term) {
      this.props.onSearch(this.state.term);
    }
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

  renderPlaceholder() {
    if (this.props.quotesMode) {
      return "Search by author";
    } else {
      return "Search authors";
    }
  }

  render() {
    return (
      <div className="Control-bar">
        <div className="Search-bar">
          <input
            name="author"
            id="author"
            aria-label="Author name"
            placeholder={this.renderPlaceholder()}
            onChange={this.handleTermChange}
            onKeyDown={this.handleKeyDown}
          />
          <button
            id="fetch-by-author"
            className="icon"
            onClick={this.search}
            aria-label="Search"
          >
            <SearchIcon />
          </button>
        </div>
        <div className="Control-cover"></div>
      </div>
    );
  }
}

export default SearchBar;
