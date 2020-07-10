import React from "react";
import "./ActionBar.css";
import { ReactComponent as RandomIcon } from "../Icons/random.svg";
import { ReactComponent as AddIcon } from "../Icons/add.svg";

class ActionBar extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      mode: "quote",
    };

    this.fetchRandom = this.fetchRandom.bind(this);
    this.fetchAll = this.fetchAll.bind(this);
    this.add = this.add.bind(this);
  }

  componentDidUpdate(prevProps) {
    if (this.props.quotesMode !== prevProps.quotesMode) {
      const mode = this.props.quotesMode ? "quote" : "author";
      this.setState({ mode: mode });
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
              <RandomIcon
                className="Action-icon"
                aria-label={`random ${this.state.mode}`}
              />
              <span className="Action-text">{`random ${this.state.mode}`}</span>
            </div>
          </button>
        </li>
        <li>
          <button
            id="fetch-all"
            className="Action wide"
            onClick={this.fetchAll}
          >
            {`all ${this.state.mode}s`}
          </button>
        </li>
        <li>
          <button id="add" className="Action" onClick={this.add}>
            <div>
              <AddIcon
                className="Action-icon"
                aria-label={`add ${this.state.mode}`}
              />
              <span className="Action-text">{`add ${this.state.mode}`}</span>
            </div>
          </button>
        </li>
      </ul>
    );
  }
}

export default ActionBar;
