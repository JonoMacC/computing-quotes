const express = require("express");
const app = express();

const PORT = process.env.PORT || 4001;
// Use static server to serve the Quotes Website
app.use(express.static("public"));

// Import and mount the quotesRouter
const quotesRouter = require("./quotes.js");
app.use("/api/quotes", quotesRouter);

// Import and mount the authorsRouter
const authorsRouter = require("./authors.js");
app.use("/api/authors", authorsRouter);

// Start server
app.listen(PORT, () =>
  console.log("Simple server running on http://localhost:4001")
);
