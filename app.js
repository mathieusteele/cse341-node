const express = require("express");

const app = express();

// app.use((req, res, next) => {
//   console.log("In the middleware!");
//   next(); // Allow the request to go to next middleware
// });

app.use("/add-product", (req, res, next) => {
  console.log("In the add product page!");
  res.send("<h1>Hi from product page</h1>");
});

app.use("/", (req, res, next) => {
  console.log("In another middleware!");
  res.send("<h1>Hi from Express</h1>");
});

app.listen(3000);
