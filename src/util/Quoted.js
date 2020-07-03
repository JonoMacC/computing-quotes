const handleError = (response) => {
  throw new Error(
    `An error occurred. Status: ${response.status}, Message: ${response.statusText}`
  );
};

const Quoted = {
  getAuthorNameById(personId) {
    return fetch(`/api/authors/${personId}`)
      .then((response) => {
        if (response.ok) {
          return response.json();
        } else {
          handleError(response);
        }
      })
      .then((response) => {
        return response.author.name;
      });
  },

  allQuotes() {
    return fetch("/api/quotes")
      .then((response) => {
        if (response.ok) {
          return response.json();
        } else {
          handleError(response);
        }
      })
      .then((response) => {
        return response.quotes;
      });
  },

  randomQuote() {
    return fetch("/api/quotes/random")
      .then((response) => {
        if (response.ok) {
          return response.json();
        } else {
          handleError(response);
        }
      })
      .then((response) => {
        return [response.quote];
      });
  },

  searchQuotes(term) {
    return fetch(`/api/quotes?person=${term}`)
      .then((response) => {
        if (response.ok) {
          return response.json();
        } else {
          handleError(response);
        }
      })
      .then((response) => {
        if (response.quotes) {
          return response.quotes;
        } else {
          return [];
        }
      });
  },

  addQuote(quote, person, year) {
    return fetch(`/api/quotes?quote=${quote}&person=${person}&year=${year}`, {
      method: "POST",
    })
      .then((response) => {
        if (response.ok) {
          return response.json();
        } else {
          handleError(response);
        }
      })
      .then((response) => {
        return response.quote;
      });
  },

  allAuthors() {
    return fetch("/api/authors")
      .then((response) => {
        if (response.ok) {
          return response.json();
        } else {
          handleError(response);
        }
      })
      .then((response) => {
        return response.authors;
      });
  },

  randomAuthor() {
    return fetch("/api/authors/random")
      .then((response) => {
        if (response.ok) {
          return response.json();
        } else {
          handleError(response);
        }
      })
      .then((response) => {
        return [response.author];
      });
  },

  searchAuthors(term) {
    return fetch(`/api/authors?name=${term}`)
      .then((response) => {
        if (response.ok) {
          return response.json();
        } else {
          handleError(response);
        }
      })
      .then((response) => {
        if (response.authors) {
          return response.authors;
        } else {
          return [];
        }
      });
  },
};

export default Quoted;
