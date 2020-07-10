const handleError = (response) => {
  throw new Error(
    `An error occurred. Status: ${response.status}, Message: ${response.statusText}`
  );
};

const routerBasePath = `/.netlify/functions/api`;

const Quoted = {
  getAuthorNameById(personId) {
    return fetch(`${routerBasePath}/authors/${personId}`)
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
    return fetch(`${routerBasePath}/quotes`)
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
    return fetch(`${routerBasePath}/quotes/random`)
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
    return fetch(`${routerBasePath}/quotes?person=${term}`)
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

  addQuote(quote, person, year = "") {
    let inputYear = "";
    if (year) inputYear = `&year=${year}`;
    return fetch(
      `${routerBasePath}/quotes?quote=${quote}&person=${person}${inputYear}`,
      {
        method: "POST",
      }
    )
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
    return fetch(`${routerBasePath}/authors`)
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
    return fetch(`${routerBasePath}/authors/random`)
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
    return fetch(`${routerBasePath}/authors?name=${term}`)
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

  addAuthor(name, bio = "", dob = "", dod = "") {
    let inputBio = "",
      inputDob = "",
      inputDod = "";
    if (bio) inputBio = `&bio=${bio}`;
    if (dob) inputDob = `&dob=${dob}`;
    if (dod) inputDod = `&dod=${dod}`;

    return fetch(
      `${routerBasePath}/authors?name=${name}${inputBio}${inputDob}${inputDod}`,
      {
        method: "POST",
      }
    )
      .then((response) => {
        if (response.ok) {
          return response.json();
        } else {
          handleError(response);
        }
      })
      .then((response) => {
        return response.author;
      });
  },
};

export default Quoted;
