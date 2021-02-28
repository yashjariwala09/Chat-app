const userResolvers = {
  Query: {
    async userById(root, { id }) {return id},
    async allUser(root) {return "all"},
  },
  Mutation: {
    async createUser(root, { firstName, lastName, email, role }, { models }) {
      return models.User.create({
        firstName,
        lastName,
        email,
        role,
      }).then((user) => {
        return user;
      });
    },
  },
};


module.exports = userResolvers;