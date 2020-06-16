import React from "react";
import Quote from "../Quote/Quote";

class QuoteList extends React.Component {
  render() {
    if (this.props.quotes.length > 0) {
      return (
        <ul className="List-container">
          {this.props.quotes.map((quote) => {
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
    } else if (!this.props.show) {
      return null;
    } else {
      return <p className="List-container">Your request returned no quotes.</p>;
    }
  }
}

export default QuoteList;
