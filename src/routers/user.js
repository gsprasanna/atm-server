const express = require("express");
const userRouter = express.Router();
const { Users } = require("../models/Users");
const Sequelize = require("sequelize");

/*
  GET request
  Route will fetch details of the user
*/
userRouter.route("/").post((req, res) => {
  const accountNumber = req.body.accountNumber;
  const User = Users.findOne({
    where: {
      accountNumber
    }
  })
    .then(response => {
      res.status(200).json({ User: response });
    })
    .catch(error =>
      res
        .status(400)
        .json({ error: "Data not found! Please enter valid pincode" })
    );
});

module.exports = userRouter;
