const express = require("express");

const PORT = process.env.PORT || 3001;

const app = express();

app.get("/", (req, res) => {
  res.json({ message: "Hello from server! Welcome to the homepage" });
});

app.get("/about", (req, res) => {
  res.json({ message: "Hello from server! Welcome to the about page" });
});

app.get("/contact", (req, res) => {
  res.json({ message: "Hello from server! Welcome to the contact page" });
});

app.listen(PORT, () => {
  console.log(`Server listening on ${PORT}`);
});