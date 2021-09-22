const path = require("path");
const express = require("express");
const bodyParser = require("body-parser");

const rootDir = require("./util/path");

const router = express.Router();

const app = express();

const homeRoutes = require("./routes/home");
const userRoutes = require("./routes/users");

app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, "public")));

app.use("/home", homeRoutes);

app.use("/users", userRoutes);

// app.use(userRoutes);

app.use("/", (req, res, next) => {
  res.sendFile(path.join(__dirname, "views", "home.html"));
});

app.use((req, res, next) => {
  // res;
  res.status(404).sendFile(path.join(__dirname, "views", "404.html"));
});

app.listen(3000);
