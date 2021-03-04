const { models } = require("../models");
const { HashPassword } = require("../helper/PasswordHelper");

function createUser({ firstName, lastName, email, password, role }) {
  const encrypt = HashPassword(password);
  return models.User.create({
    firstName,
    lastName,
    email,
    password: encrypt,
    role,
  })
    .then((user) => {
      return user;
    })
    .catch((error) => {
      return error;
    });
}

function loginUser({ email, password }) {
  return models.User.findAll({
    limit: 1,
    where: {
      email: email,
    },
    order: [["createdAt", "DESC"]],
  })
    .then((user) => {
      if(user){

      }
      throw new Error("Login credentials are invalid")
    })
    .catch((error) => {
      return error;
    });
}

module.exports = {
  createUser,
};
