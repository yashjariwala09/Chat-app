const { models } = require("../models");
const { HashPassword, CheckPassword } = require("../helper/PasswordHelper");

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
  }).then((user) => {
      if (user && user[0]) {
        const userValue = user[0].dataValues;
        const passwordHash = userValue.password;
        if (CheckPassword(password, passwordHash)) {
          return { ...userValue, message: "SUCCESS" };
        }
      }
      throw new Error("Login credentials are invalid");
    })
    .catch((error) => {
      return error;
    });
}

module.exports = {
  createUser,
  loginUser,
};
