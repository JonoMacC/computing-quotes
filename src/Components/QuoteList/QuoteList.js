import React from "react";
import Quote from "../Quote/Quote";
import Author from "../Author/Author";

class QuoteList extends React.Component {
  renderQuotes() {
    if (this.props.results.length > 0) {
      return (
        <ul className="List-container">
          {this.props.results.map((quote) => {
            return (
              <Quote
                key={quote.id}
                text={quote.quote}
                year={quote.year}
                personId={quote.personId}
              />
            );
          })}
        </ul>
      );
    } else {
      return <p className="List-container">Your request returned no quotes.</p>;
    }
  }

  renderAuthors() {
    if (this.props.results.length > 0) {
      return (
        <ul className="List-container">
          {this.props.results.map((author) => {
            return (
              <Author
                key={author.id}
                name={author.name}
                dob={author.dob}
                dod={author.dod}
                imgSrc={author.img}
                bio={author.bio}
              />
            );
          })}
        </ul>
      );
    } else {
      return (
        <p className="List-container">Your request returned no authors.</p>
      );
    }
  }

  render() {
    if (!this.props.show) {
      return null;
    } else if (this.props.quotesMode) {
      return this.renderQuotes();
    } else {
      return this.renderAuthors();
    }
  }
}

export default QuoteList;
