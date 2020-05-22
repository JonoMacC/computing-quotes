const express = require("express");

const { quotes, authors } = require("./data");
const { getRandomElement } = require("./utils");

quotesRouter = express.Router();

// Get a random quote
quotesRouter.get("/random", (req, res) => {
  res.send({
    quote: getRandomElement(quotes),
  });
});

// Get a single quote by person
// if person is defined, return their quotes
// otherwise return all quotes
quotesRouter.get("/", (req, res) => {
  if (req.query.person !== undefined) {
    const quotesByPerson = quotes.filter(
      (quote) => quote.person === req.query.person
    );
    res.send({
      quotes: quotesByPerson,
    });
  } else {
    res.send({
      quotes: quotes,
    });
  }
});

// Post a new quote to the array of quotes
quotesRouter.post("/", (req, res) => {
  const newQuote = {
    id: quotes.length + 1,
    quote: req.params.quote,
    year: req.params.year,
  };

  if (newQuote.quote && req.params.person) {
    // Check if person is in the list of authors
    const authorIndex = authors.findIndex(
      (author) => author.name === req.params.person
    );
    if (authorIndex !== -1) {
      newQuote.personId = authors[authorIndex].id;
    } else {
      res
        .status(404)
        .send("Author not found. Add author before posting quotes.");
    }

    // Add quote to the list of quotes
    quotes.push(newQuote);
    res.status(201).send({
      quote: newQuote,
    });
  } else {
    res.status(400).send();
  }
});

// Id existence checking middleware
quotesRouter.use("/:id", (req, res, next) => {
  const quoteId = Number(req.params.id);
  const quoteIndex = quotes.findIndex((quote) => Number(quote.id) === quoteId);
  if (quoteIndex === -1) {
    return res.status(404).send("Quote not found");
  }
  req.index = quoteIndex;
  next();
});

// Get a quote by id
quotesRouter.get("/:id", (req, res) => {
  res.send({
    quote: quotes[req.index],
  });
});

// Update a quote by id
quotesRouter.put("/:id", (req, res) => {
  const updatedQuote = quotes[req.index];

  if (req.params.quote) updatedQuote.quote = req.params.quote;
  if (req.params.year) updatedQuote.year = req.params.year;

  quotes[req.index] = updatedQuote;
  res.status(200).send({
    quote: updatedQuote,
  });
});

// Delete a quote by id
quotesRouter.delete("/:id", (req, res) => {
  quotes.splice(req.index, 1);
  res.status(204).send();
});

module.exports = quotesRouter;
