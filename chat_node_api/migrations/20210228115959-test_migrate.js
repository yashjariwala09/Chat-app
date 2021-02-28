"use strict";

module.exports = {
  up: async (queryInterface, Sequelize) => {
    return Promise.all([
      queryInterface.addColumn(
        "users", // table name
        "role", // new field name
        {
          type: Sequelize.STRING,
          field: "role",
        }
      ),
      queryInterface.changeColumn(
        "users", // table name
        "id", // new field name
        {
          type: Sequelize.INTEGER,
          autoIncrement: true,
          primaryKey: true,
        }
      ),
    ]);
  },

  down: async (queryInterface, Sequelize) => {
    /**
     * Add reverting commands here.
     *
     * Example:
     * await queryInterface.dropTable('users');
     */
  },
};
