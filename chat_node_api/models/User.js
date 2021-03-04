const Sequelize = require("Sequelize");
const sequelize = require("../database/dbConfig");
var User = sequelize.define(
  "user",
  {
    id: {
      type: Sequelize.INTEGER,
      autoIncrement: true,
      primaryKey: true,
      allowNull: false,
    },
    firstName: {
      type: Sequelize.STRING,
      field: "first_name", // Will result in an attribute that is firstName when user facing but first_name in the database
      allowNull: false,
    },
    lastName: {
      type: Sequelize.STRING,
      field: "last_name",
      allowNull: false,
    },
    email: {
      type: Sequelize.STRING,
      field: "email",
      allowNull: false,
      unique: true,
    },
    password: {
      type: Sequelize.STRING,
      field: "password",
      allowNull: false,
    },
    role: {
      type: Sequelize.INTEGER,
      field: "role",
      allowNull: false,
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
