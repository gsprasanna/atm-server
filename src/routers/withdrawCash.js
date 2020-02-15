const express = require("express");
const withdrawCashRouter = express.Router();
const { Users } = require("../models/Users");
const Sequelize = require("sequelize");

/*
  POST request
  Route will withdraw amount from the user account
*/
withdrawCashRouter.route("/").post(async (req, res) => {
  const accountNumber = req.body.accountNumber;
  const secretPIN = req.body.secretPIN;
  const withdrawCash = req.body.withdrawCash;
  const userSavings = await Users.findOne({
    where: {
      accountNumber
    }
  })
    .then(response => response.savings)
    .catch(error => res.status(400).json({ error: "Data not found!" }));
  if (userSavings < withdrawCash) {
    res.status(200).json({
      message:
        "Your Balance is not sufficient enought to proceed the requested amount! Enter valid amount"
    });
  } else {
    const withdraw = Users.decrement("savings", {
      by: withdrawCash,
      where: { accountNumber: accountNumber }
    })
      .then(response => {
        res.status(200).json({ withdrawStatus: "cash withdrawn successfully" });
      })
      .catch(error =>
        res.status(400).json({
          error: "Problem in withdrawing the cash! Please try again later"
        })
      );
  }
});

module.exports = withdrawCashRouter;
