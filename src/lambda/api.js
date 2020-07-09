const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const morgan = require("morgan");
const errorhandler = require("errorhandler");

const serverless = require("serverless-http");

const app = express();

// Mount express middleware
app.use(bodyParser.json());
app.use(morgan("dev"));
app.use(cors());
app.use(errorhandler());

// Import and mount the quotesRouter
const quotesRouter = require("../../api/quotes.js");
app.use("/.netlify/functions/api/quotes", quotesRouter);

// Import and mount the authorsRouter
const authorsRouter = require("../../api/authors.js");
app.use("/.netlify/functions/api/authors", authorsRouter);

module.exports.handler = serverless(app);
