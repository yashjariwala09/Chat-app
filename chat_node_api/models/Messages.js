const Sequelize = require("Sequelize");
const sequelize = require("../database/dbConfig");
var Message = sequelize.define(
  "message",
  {
    id: {
      type: Sequelize.INTEGER,
      autoIncrement: true,
      primaryKey: true,
      allowNull: false,
    },
    text: {
      type: Sequelize.STRING,
    },
    senderId: {
      type: Sequelize.INTEGER,
      allowNull: false,
    },
    receiveId: {
      type: Sequelize.INTEGER,
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

module.exports = Message;
