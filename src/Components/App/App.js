import React from "react";
import "./App.css";

import NavBar from "../NavBar/NavBar";
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
      showQuotes: false,
      showForm: false,
      searchResults: [],
    };

    this.search = this.search.bind(this);
    this.fetchRandom = this.fetchRandom.bind(this);
    this.fetchAll = this.fetchAll.bind(this);
    this.showForm = this.showForm.bind(this);
    this.hideForm = this.hideForm.bind(this);
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

  // search for a term
  // update the set of search results with those returned from the Quoted API
  search(term) {
    Quoted.search(term).then((searchResults) => {
      return this.setState({ searchResults: searchResults, showQuotes: true });
    });
  }

  // fetch a random quote
  fetchRandom() {
    Quoted.random().then((searchResults) => {
      return this.setState({ searchResults: searchResults, showQuotes: true });
    });
  }

  // fetch all quotes
  fetchAll() {
    Quoted.all().then((searchResults) => {
      return this.setState({ searchResults: searchResults, showQuotes: true });
    });
  }

  render() {
    return (
      <div className="App">
        <QuoteForm show={this.state.showForm} onClose={this.hideForm} />
        <NavBar />
        <main>
          <h1>
            computer:<span className="highlight">quotes</span>
          </h1>
          <SearchBar onSearch={this.search} />
          <ActionBar
            onFetchRandom={this.fetchRandom}
            onFetchAll={this.fetchAll}
            onAddQuote={this.showForm}
          />
          <QuoteList
            quotes={this.state.searchResults}
            show={this.state.showQuotes}
          />
        </main>
        <Footer />
      </div>
    );
  }
}

export default App;
