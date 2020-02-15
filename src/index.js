const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const checkBalanceRouter = require("./routers/checkBalance");
const depositCashRouter = require("./routers/depositCash");
const withdrawCashRouter = require("./routers/withdrawCash");
const userRouter = require("./routers/user");
/**
 * Creates an instance of the express server
 */
const app = express();
app.use(cors());
app.use(bodyParser.json());

const server = app.listen(process.env.PORT, () => {
  console.log("Server running in port: ", server.address().port);
});

// configure the router
app.use("/CheckBalance", cors(), checkBalanceRouter);
app.use("/DepositCash", cors(), depositCashRouter);
app.use("/WithdrawCash", cors(), withdrawCashRouter);
app.use("/GetUserDetail", cors(), userRouter);
