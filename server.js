const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const morgan = require("morgan");
const errorhandler = require("errorhandler");

const app = express();

const PORT = process.env.PORT || 4001;
// Use static server to serve the Quotes Website
app.use(express.static("public"));

// Mount express middleware
app.use(bodyParser.json());
app.use(morgan("dev"));
app.use(cors());
app.use(errorhandler());

// Import and mount the quotesRouter
const quotesRouter = require("./src/api/quotes.js");
app.use("/api/quotes", quotesRouter);

// Import and mount the authorsRouter
const authorsRouter = require("./src/api/authors.js");
app.use("/api/authors", authorsRouter);

// Start server
app.listen(PORT, () => console.log(`Listening on port: ${PORT}`));
