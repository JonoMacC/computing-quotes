import React from "react";
import "./ActionBar.css";
import { ReactComponent as RandomIcon } from "../Icons/random.svg";
import { ReactComponent as AddIcon } from "../Icons/add.svg";

class ActionBar extends React.Component {
  constructor(props) {
    super(props);

    this.fetchRandom = this.fetchRandom.bind(this);
    this.fetchAll = this.fetchAll.bind(this);
    this.add = this.add.bind(this);
  }

  getMode() {
    if (this.props.quotesMode) {
      return "quote";
    } else {
      return "author";
    }
  }

  fetchRandom() {
    this.props.onFetchRandom();
  }

  fetchAll() {
    this.props.onFetchAll();
  }

  add() {
    this.props.onAdd();
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
              <span className="Action-text">{`random ${this.getMode()}`}</span>
            </div>
          </button>
        </li>
        <li>
          <button
            id="fetch-all"
            className="Action wide"
            onClick={this.fetchAll}
          >
            {`all ${this.getMode()}s`}
          </button>
        </li>
        <li>
          <button id="add" className="Action" onClick={this.add}>
            <div>
              <AddIcon className="Action-icon" />
              <span className="Action-text">{`add ${this.getMode()}`}</span>
            </div>
          </button>
        </li>
      </ul>
    );
  }
}

export default ActionBar;
