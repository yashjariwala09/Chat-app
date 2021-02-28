const Sequelize = require("sequelize");
var mysql2 = require("mysql2");

var connection = new Sequelize("chatapp", "root", "", {
  host: "localhost",
  dialect: "mysql",
  dialectModule: mysql2,
  pool: {
    max: 5,
    min: 0,
    idle: 10000,
  },
  port: 3306
});

module.exports = connection;
global.sequelize = connection;
