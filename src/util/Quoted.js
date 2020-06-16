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

  all() {
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

  random() {
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

  search(term) {
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

  add(quote, person, year) {
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
};

export default Quoted;
