const Sequelize = require("Sequelize");
const sequelize = require("../database/dbConfig");
var User = sequelize.define(
  "user",
  {
    id: {
      type: Sequelize.INTEGER,
      autoIncrement: true,
      primaryKey: true,
      allowNull: false
    },
    firstName: {
      type: Sequelize.STRING,
      field: "first_name", // Will result in an attribute that is firstName when user facing but first_name in the database
    },
    lastName: {
      type: Sequelize.STRING,
      field: "last_name",
    },
    email: {
      type: Sequelize.STRING,
      field: "email",
    },
    password: {
      type: Sequelize.STRING,
      field: "password",
    },
    role: {
      type: Sequelize.INTEGER,
      field: "role",
    },
  },
  {
    timestamps: true,

    createdAt: true,

    updatedAt: true,

    deletedAt: true,
  }
);

module.exports = User;
// id: Guid!
//     firstName: String!
//     lastName: String!
//     email: String!
//     profileImg: String!
//     role: Int!
