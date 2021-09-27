const path = require("path");
const express = require("express");

const rootDir = require("../util/path");

const router = express.Router();

const users = ["Jared Austin", "Leroy Jenkins", "Frank Gorshen"];
const errors = [];

router.get("/", (req, res, next) => {
  res.render("pages/users", {
    title: "Users",
    path: "/users",
    users: users,
    errors: errors,
  });
});

router.post("/addUser", (req, res, next) => {
  if (users.includes(req.body.user)) {
    errors.push(`Error! A user with the name ${req.body.user} already exists.`);
  } else {
    users.push(req.body.user);
  }

  res.writeHead(302, { Location: "/users/" });
  res.end();
});

router.post("/removeUser", (req, res, next) => {
  if (users.includes(req.body.user)) {
    position = users.indexOf(req.body.user);

    users.splice(position, 1);
  } else {
    errors.push(`There is no user ${req.body.user} found.`);
  }

  res.writeHead(302, { Location: "/users/" });
  res.end();
});

router.post("/clearError", (req, res, next) => {
  if (errors.includes(req.body.error)) {
    position = errors.indexOf(req.body.error);

    errors.splice(position, 1);
  }

  res.writeHead(302, { Location: "/users/" });
  res.end();
});

module.exports = router;
