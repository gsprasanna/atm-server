/*
  Importing required packages
*/
const Sequelize = require("sequelize");
const AtmDb = require("../config/atmDB");

/*
  modeling the schema/table for atm model.
*/
const Users = AtmDb.define("tbl_atm_users", {
  accountNumber: {
    type: Sequelize.BIGINT,
    primaryKey: true
  },
  userName: Sequelize.STRING,
  savings: Sequelize.INTEGER,
  secretPIN: Sequelize.INTEGER
});

/*
  Synchronizing the model with the database
*/
const UserSync = ({ force = false } = { force: false }) => {
  Users.sync({ force })
    .then(() => {
      const testUser = {
        accountNumber: 1234567890,
        userName: "Takvaviya",
        savings: 10000,
        secretPIN: 3010
      };

      Users.create(testUser)
        .then(result => {
          console.log(result.get());
        })
        .catch(console.error);
    })
    .catch(console.error);
};

exports.Users = Users;
exports.UserSync = UserSync;
