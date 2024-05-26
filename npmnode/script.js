const express = require("express");
const app = express();

// using the middelware to connect the sever
// the middel ware use to req ata hai but respones jane se pehele hum kuche bhi karsakte hai use use kareke this we hagve to use in a cokise storege using for thise
app.use((req, res, next) => {
  console.log("hello");
  next();
});
app.use((req, res, next) => {
  console.log(5 + 5);
  next();
});
app.use((req, res, next) => {
  console.log("hello", 2 * 3);
  next();
});

// making the server in using the express
app.get("/", function (req, res) {
  res.send("Hello World");
});

app.get("/profile", (req, res) => {
  // req hota hai jo frontend se backend me ata hai aur res hota jo humko respone karna hai
  res.send("<h1>hello cht bhi</h1>"); // you will  see this code to respons to the user means the  we are respone to frontend
});

app.get("/about", (req, res, next) => {
  return next(new Error("somthing went wrong")); /// thise the code to sowhing the error in browser

  res.send("<h1>about page </h1>");
});

/// thise the error handeler in express js
app.use((err, req, res, next) => {
  console.error(err);
  res.status(500).send("something went wrong !!!!!!");
});

app.listen(3000);

// routes create karna padega ager component dikha nag hai to
