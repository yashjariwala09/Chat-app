const bcrypt = require("bcrypt");
const saltRounds = 10;

function HashPassword(myPlaintextPassword) {
  const hash = bcrypt.hashSync(myPlaintextPassword, saltRounds);
  return hash;
}

function CheckPassword(myPlaintextPassword, hash) {
  const comapre = bcrypt.compareSync(myPlaintextPassword, hash);
  return comapre;
}

module.exports = {
  HashPassword,
  CheckPassword,
};
