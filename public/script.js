const fetchAllButton = document.getElementById("fetch-quotes");
const fetchRandomButton = document.getElementById("fetch-random");
const fetchByAuthorButton = document.getElementById("fetch-by-author");

const quoteContainer = document.getElementById("quote-container");
const quoteText = document.querySelector(".quote");
const attributionText = document.querySelector(".attribution");

const resetQuotes = () => {
  quoteContainer.innerHTML = "";
};

const renderError = (response) => {
  quoteContainer.innerHTML = `<p>Your request returned an error from the server: </p>
<p>Code: ${response.status}</p>
<p>${response.statusText}</p>`;
};

const getAuthorNameById = (personId) => {
  return fetch(`/api/authors/${personId}`).then(async (response) => {
    if (response.ok) {
      const jsonResponse = await response.json();
      return jsonResponse.author.name;
    } else {
      renderError(response);
    }
  });
};

const renderQuotes = (quotes = []) => {
  resetQuotes();
  if (quotes.length > 0) {
    quotes.forEach(async (quote) => {
      const newQuote = document.createElement("div");
      const personName = await getAuthorNameById(quote.personId);
      newQuote.className = "single-quote";
      newQuote.innerHTML = `<div class="quote-text">${quote.quote}</div>
      <div class="attribution"><span>- ${personName}</span><span>${quote.year}</span></div>`;
      quoteContainer.appendChild(newQuote);
    });
  } else {
    quoteContainer.innerHTML = "<p>Your request returned no quotes.</p>";
  }
};

fetchAllButton.addEventListener("click", () => {
  fetch("/api/quotes")
    .then((response) => {
      if (response.ok) {
        return response.json();
      } else {
        renderError(response);
      }
    })
    .then((response) => {
      const quotes = response.quotes;
      renderQuotes(quotes);
    });
});

fetchRandomButton.addEventListener("click", () => {
  fetch("/api/quotes/random")
    .then((response) => {
      if (response.ok) {
        return response.json();
      } else {
        renderError(response);
      }
    })
    .then((response) => {
      renderQuotes([response.quote]);
    });
});

fetchByAuthorButton.addEventListener("click", () => {
  const authorName = document.getElementById("author").value;
  fetch(`/api/quotes?person=${authorName}`)
    .then((response) => {
      if (response.ok) {
        return response.json();
      } else {
        renderError(response);
      }
    })
    .then((response) => {
      renderQuotes(response.quotes);
    });
});
