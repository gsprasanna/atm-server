const express = require("express");
const checkBalanceRouter = express.Router();
const { Users } = require("../models/Users");
const Sequelize = require("sequelize");

/*
  GET request
  Route will fetch user details for the balance
*/
checkBalanceRouter.route("/:accountNumber").get((req, res) => {
  const accountNumber = req.params.accountNumber;
  const User = Users.findOne({
    where: {
      accountNumber
    }
  })
    .then(response => {
      res.status(200).json({ balance: response });
    })
    .catch(error =>
      res
        .status(400)
        .json({ error: "Data not found! Please enter valid pincode" })
    );
});

module.exports = checkBalanceRouter;
