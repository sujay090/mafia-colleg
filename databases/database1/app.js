const express = require("express");
const userModel = require("./usermodel");
const usermodel = require("./usermodel");
const app = express();
app.get("/", (req, res) => {
  res.send("sujay");
});

app.get("/create", async (req, res) => {
  /// create operetion
  let createduser = await userModel.create({
    name: "sujay pradhan",
    userName: "max",
    email: "pradhansujay856@gmail.com",
  });
  res.send(createduser);
});

app.get("/update", async (req, res) => {
  // update operation
  let updatedUser = await userModel.findOneAndUpdate(
    {
      userName: "max",
    },
    { name: "sujay ganga pradhan" }
  );
  console.log(updatedUser);
  res.send(updatedUser);
});

app.get("/read", async (req, res) => {
  // read operation
  let readUsermodel = await userModel.find();
  console.log(readUsermodel);
  res.send(readUsermodel);
});

app.get("/delete", async (req, res) => {
  // delete operation
  let deletUsermodel = await userModel.find({name:"sujay pradhan"});
  console.log(deletUsermodel);
  res.send(deletUsermodel);
});

















app.listen(3000);
