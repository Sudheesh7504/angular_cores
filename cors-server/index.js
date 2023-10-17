const express = require("express");
const cors = require("cors");
const app = express();
const PORT = 5000;
app.use(cors({ origin: "http://localhost:4200" }));
app.get("/", (req, res) => {
  res.send("Welcome to CORS server! 😁");
});
app.get("/candy", (req, res) => {
  res.json({ candy: "bubble-gum", name: "Sudeesh" });
});
app.listen(PORT, () => console.log(`server running on port ${PORT}`));
