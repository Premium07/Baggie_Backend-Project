const express = require("express");
const router = express.Router();

router.get("/", function (err, res) {
  res.send("Hey");
});

module.exports = router;
