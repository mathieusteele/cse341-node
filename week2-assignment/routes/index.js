const path = require("path");
const express = require("express");

const rootDir = require("../util/path");

const router = express.Router();

// router.get("/test", (req, res, next) => {
//   res.sendFile(path.join(rootDir, "views", "home.html"));
// });

// router.get("/all", (req, res, next) => {
//   res.sendFile(path.join(rootDir, "views", "users.html"));
// });

// router.use("/product", (req, res, next) => {
//   console.log(req.body);
//   res.redirect("/");
// });

module.exports = router;
