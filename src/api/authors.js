const express = require("express");

const { authors } = require("../../data");
const { getRandomElement } = require("../util/utils");

const authorsRouter = express.Router();

// Get a random author
authorsRouter.get("/random", (req, res) => {
  res.send({
    author: getRandomElement(authors),
  });
});

// Get an author by name
// if name is defined, return the author
// otherwise return all authors
authorsRouter.get("/", (req, res) => {
  if (req.query.name !== undefined && req.query.name.length > 0) {
    const authorByName = authors.filter(
      (author) => author.name === req.query.name
    );
    res.send({
      authors: authorByName,
    });
  } else {
    res.send({
      authors: authors,
    });
  }
});

// Post a new author to the array of authors
authorsRouter.post("/", (req, res) => {
  const newAuthor = {
    id: authors.length + 1,
    name: req.params.name,
    dob: req.params.dob,
    dod: req.params.dod,
    bio: req.params.bio,
  };
  if (newAuthor.name) {
    authors.push(newAuthor);
    res.status(201).send({
      author: newAuthor,
    });
  } else {
    res.status(400).send();
  }
});

// Id existence checking middleware
authorsRouter.use("/:id", (req, res, next) => {
  const authorId = Number(req.params.id);
  const authorIndex = authors.findIndex(
    (author) => Number(author.id) === authorId
  );
  if (authorIndex === -1) {
    return res.status(404).send("Author not found");
  }
  req.index = authorIndex;
  next();
});

// Get an author by id
authorsRouter.get("/:id", (req, res) => {
  res.send({
    author: authors[req.index],
  });
});

// Update an author by id
authorsRouter.put("/:id", (req, res) => {
  const updatedAuthor = authors[req.index];

  if (req.params.name) updatedAuthor.name = req.params.name;
  if (req.params.dob) updatedAuthor.dob = req.params.dob;
  if (req.params.dod) updatedAuthor.dod = req.params.dod;
  if (req.params.bio) updatedAuthor.bio = req.params.bio;

  authors[req.index] = updatedAuthor;

  res.status(200).send({
    author: updatedAuthor,
  });
});

// Delete an author by id
authorsRouter.delete("/:id", (req, res) => {
  authors.splice(req.index, 1);
  res.status(204).send();
});

module.exports = authorsRouter;
