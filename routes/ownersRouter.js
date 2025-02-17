const express = require("express");
const router = express.Router();
const ownerModel = require("../models/owner.model");

if (process.env.NODE_ENV === "development") {
  router.post("/create", async function (req, res) {
    let owners = await ownerModel.find();
    if (owners.length > 0) {
      return res.status(504).send("You don't permission to create new owner");
    }

    let { fullname, email, password } = req.body;
    let createdOwner = await ownerModel.create({
      fullname,
      email,
      password,
    });
    res.status(200).send(createdOwner);
  });
}

router.get("/", function (err, res) {
  res.send("Hey");
});

module.exports = router;
