import React from "react";
import "./ActionBar.css";
import { ReactComponent as RandomIcon } from "../Icons/random.svg";
import { ReactComponent as AddIcon } from "../Icons/add.svg";

class ActionBar extends React.Component {
  constructor(props) {
    super(props);

    this.fetchRandom = this.fetchRandom.bind(this);
    this.fetchAll = this.fetchAll.bind(this);
    this.addQuote = this.addQuote.bind(this);
  }

  fetchRandom() {
    this.props.onFetchRandom();
  }

  fetchAll() {
    this.props.onFetchAll();
  }

  addQuote() {
    this.props.onAddQuote();
  }

  render() {
    return (
      <ul className="Action-bar">
        <li>
          <button
            id="fetch-random"
            className="Action"
            onClick={this.fetchRandom}
          >
            <div>
              <RandomIcon className="Action-icon" />
              <span className="Action-text">random quote</span>
            </div>
          </button>
        </li>
        <li>
          <button
            id="fetch-quotes"
            className="Action wide"
            onClick={this.fetchAll}
          >
            all quotes
          </button>
        </li>
        <li>
          <button id="add-quote" className="Action" onClick={this.addQuote}>
            <div>
              <AddIcon className="Action-icon" />
              <span className="Action-text">add quote</span>
            </div>
          </button>
        </li>
      </ul>
    );
  }
}

export default ActionBar;
