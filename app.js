const express = require("express");
const app = express();

app.get("/", function (req, res) {
  res.send("Baggies homepage");
});

app.listen(3000);
