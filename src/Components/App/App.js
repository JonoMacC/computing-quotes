import React from "react";
import "./App.css";

import SegmentedControl from "../SegmentedControl/SegmentedControl";
import SearchBar from "../SearchBar/SearchBar";
import ActionBar from "../ActionBar/ActionBar";
import QuoteList from "../QuoteList/QuoteList";
import QuoteForm from "../QuoteForm/QuoteForm";
import Footer from "../Footer/Footer";

import Quoted from "../../util/Quoted";

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      quotesMode: true,
      showResults: false,
      showForm: false,
      searchResults: [],
    };

    this.search = this.search.bind(this);
    this.fetchRandom = this.fetchRandom.bind(this);
    this.fetchAll = this.fetchAll.bind(this);

    this.showForm = this.showForm.bind(this);
    this.hideForm = this.hideForm.bind(this);
    this.changeMode = this.changeMode.bind(this);
  }

  // display the modal form
  showForm() {
    return this.setState({ showForm: true });
  }

  // hide the modal form from view
  // set the "newForm" state to true so the form is cleared
  hideForm() {
    return this.setState({ showForm: false, newForm: true });
  }

  // search for a quote by the name of the author
  // OR search for an author by name
  // update the set of search results with those returned from the quotes API
  search(term) {
    if (this.state.quotesMode) {
      Quoted.searchQuotes(term).then((searchResults) => {
        return this.setState({
          searchResults: searchResults,
          showResults: true,
        });
      });
    } else {
      Quoted.searchAuthors(term).then((searchResults) => {
        return this.setState({
          searchResults: searchResults,
          showResults: true,
        });
      });
    }
  }

  // fetch a random quote
  fetchRandom() {
    if (this.state.quotesMode) {
      Quoted.randomQuote().then((searchResults) => {
        return this.setState({
          searchResults: searchResults,
          showResults: true,
        });
      });
    } else {
      Quoted.randomAuthor().then((searchResults) => {
        return this.setState({
          searchResults: searchResults,
          showResults: true,
        });
      });
    }
  }

  // fetch all quotes
  fetchAll() {
    if (this.state.quotesMode) {
      Quoted.allQuotes().then((searchResults) => {
        return this.setState({
          searchResults: searchResults,
          showResults: true,
        });
      });
    } else {
      Quoted.allAuthors().then((searchResults) => {
        return this.setState({
          searchResults: searchResults,
          showResults: true,
        });
      });
    }
  }

  // set mode to either "quotes" or "authors"
  changeMode() {
    if (this.state.quotesMode) {
      return this.setState({
        quotesMode: false,
        searchResults: [],
        showResults: false,
      });
    } else {
      return this.setState({
        quotesMode: true,
        searchResults: [],
        showResults: false,
      });
    }
  }

  render() {
    return (
      <div className="App">
        <QuoteForm show={this.state.showForm} onClose={this.hideForm} />
        <SegmentedControl
          quotesMode={this.state.quotesMode}
          onToggle={this.changeMode}
        />
        <main>
          <h1>
            computer:<span className="highlight">quotes</span>
          </h1>
          <SearchBar
            onSearch={this.search}
            quotesMode={this.state.quotesMode}
          />
          <ActionBar
            quotesMode={this.state.quotesMode}
            onFetchRandom={this.fetchRandom}
            onFetchAll={this.fetchAll}
            onAdd={this.showForm}
          />
          <QuoteList
            results={this.state.searchResults}
            quotesMode={this.state.quotesMode}
            show={this.state.showResults}
          />
        </main>
        <Footer />
      </div>
    );
  }
}

export default App;
