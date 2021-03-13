const userResolvers = {
  Query: {
    async userById(root, { id }) {
      return id;
    },
    async allUser(root) {
      return "all";
    },
    async login(root, { email, password }, { services: { UserService } }) {
      return await UserService.loginUser({ email, password }).catch((error) => {
        return error;
      });
    },
  },
  
  Mutation: {
    async createUser(
      root,
      { firstName, lastName, email, password, role },
      { services: { UserService } }
    ) {
      const user = await UserService.createUser({
        firstName,
        lastName,
        email,
        password,
        role,
      });
      return user;
    },
  },
};

module.exports = userResolvers;
