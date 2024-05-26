const express = require("express");
const app = express();

const path = require("path");

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(express.static(path.join(__dirname, "public")));
// app.set("view engine", "ejs");
app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "public", "views", "index.html"));
  // res.render("index");
});
app.post("/about", (req, res) => {
  const data = req.body;
  console.log(data);
  res.send("sujay");
});
app.listen(3000, () => {
  console.log("server is running ");
  // console.log(__dirname + "/server.js");
});
