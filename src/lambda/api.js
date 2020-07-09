import express from "express";
import cors from "cors";
import morgan from "morgan";
import bodyParser from "body-parser";
import compression from "compression";

import serverless from "serverless-http";

const app = express();
const router = express.Router();
const routerBasePath =
  process.env.NODE_ENV === "dev" ? `/api` : `/.netlify/functions/api/`;

// Import and mount the authorsRouter
// const authorsRouter = require("../../api/authors.js");
// app.use("/api/authors", authorsRouter);

// Import and mount the quotesRouter
// const quotesRouter = require("../../api/quotes.js");

// gzip responses
router.use(compression());

router.get("/", function (req, res) {
  res.send("hello world");
});

// Attach logger
app.use(morgan("dev"));

// Setup routes
app.use(routerBasePath, router);

// Mount express middleware
router.use(cors());
router.use(bodyParser.json());
router.use(bodyParser.urlencoded({ extended: true }));

// module.exports = app;
exports.handler = serverless(app);
