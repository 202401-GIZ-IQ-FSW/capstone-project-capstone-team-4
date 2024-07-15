const express = require("express");
const cors = require("cors");

const bodyParser = require("body-parser");
const session = require("express-session");
const logger = require('./utils/logger');


require("dotenv").config();

const connectToMongo = require("./db/connection");

const authRoutes = require("./routes/auth");
const ticketRoutes = require("./routes/ticketRoutes");

const app = express();
const port =
  process.env.NODE_ENV === "test"
    ? process.env.NODE_LOCAL_TEST_PORT
    : process.env.NODE_LOCAL_PORT;

// Middleware
app.use(cors());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.json());

app.use(
  session({
    secret: "secret",
    resave: false,
    saveUninitialized: true,
    cookie: { secure: false }, // Set to true when usin HTTPS
  })
);

app.use("/api/auth", authRoutes);
app.use("/ticket/api", ticketRoutes);

app.listen(port, () => {
  console.log(`Server listening on port ${port}`);
  connectToMongo();
});

app.get("/test", (req, res) => {
  res.json(
    "Server connection to client works!!  Good Luck with your capstones :D"
  );
});

module.exports = app;
