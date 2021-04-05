const express = require("express");
const router = express.Router();
let User = require("../models/user.model");

// Get Request
router.get("/", (req, res) => {
  User.find() //Finding all users
    .then((user) => res.json(user))
    .catch((err) => res.status(400).json("Error :" + err));
});

router.post("/add", (req, res) => {
  const username = req.body.username;
  const newUser = new User({ username });

  newUser
    .save() //Add a new document to collection
    .then(() => res.json("User Added..!"))
    .catch((err) => res.status(400).json("Error :" + err));
});

module.exports = router;
