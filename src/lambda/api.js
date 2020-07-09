import express from "express";
import cors from "cors";
import morgan from "morgan";
import bodyParser from "body-parser";
import compression from "compression";

import serverless from "serverless-http";

const app = express();
const router = express.Router();

// Import the authorsRouter
const authorsRouter = require("../api/authors.js");

// Import the quotesRouter
const quotesRouter = require("../api/quotes.js");

// gzip responses
router.use(compression());
authorsRouter.use(compression());
quotesRouter.use(compression());

router.get("/", function (req, res) {
  res.send("hello world");
});

// Attach logger
app.use(morgan("dev"));

// Setup routes
app.use("/.netlify/functions/api/authors", authorsRouter);
app.use("/.netlify/functions/api/quotes", quotesRouter);
// app.use("./netlify/functions/api", router);

// Mount express middleware
router.use(cors());
router.use(bodyParser.json());
router.use(bodyParser.urlencoded({ extended: true }));

authorsRouter.use(cors());
authorsRouter.use(bodyParser.json());
authorsRouter.use(bodyParser.urlencoded({ extended: true }));

quotesRouter.use(cors());
quotesRouter.use(bodyParser.json());
quotesRouter.use(bodyParser.urlencoded({ extended: true }));

// module.exports = app;
exports.handler = serverless(app);
