const Sequelize = require("sequelize");
/**
 * setting the connection to the database.
 * Here postgresql is used.
 */
const AtmDB = new Sequelize(process.env.DB_URL);

//Testing the connection establishment with DB
AtmDB.authenticate()
  .then(() => {
    console.log(
      "Connection has been established successfully with the atm database."
    );
  })
  .catch(err => {
    console.error("Unable to connect to the atm database:", err);
  });

module.exports = AtmDB;
