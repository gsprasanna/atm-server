const express = require("express");
const depositCashRouter = express.Router();
const { Users } = require("../models/Users");
const Sequelize = require("sequelize");

/*
  POST request
  Route will deposit the amount in the user account
*/
depositCashRouter.route("/").post((req, res) => {
  console.log(req.body.depositCash);
  const accountNumber = req.body.accountNumber;
  const secretPIN = req.body.secretPIN;
  const depositCash = req.body.depositCash;
  const Deposit = Users.increment("savings", {
    by: depositCash,
    where: { accountNumber: accountNumber }
  })
    .then(response => {
      res.status(200).json({ depositStatus: "cash deposited successfully" });
    })
    .catch(error =>
      res.status(400).json({
        error: "Problem in depositing the cash! Please try again later"
      })
    );
});

module.exports = depositCashRouter;
