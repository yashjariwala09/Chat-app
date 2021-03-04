const express = require("express");
const { ApolloServer, gql } = require("apollo-server-express");
const sequelize = require("./database/dbConfig");
const services = require("./service");

const typeDefs = require("./schemas");
const resolvers = require("./resolvers");

const server = new ApolloServer({
  typeDefs,
  resolvers,
  context: () => ({
    services,
  }),
  formatError: (err) => {
    // Don't give the specific errors to the client.
    if (err.message.startsWith("Database Error: ")) {
      return new Error("Internal server error");
    }
    // Otherwise return the original error. The error can also
    // be manipulated in other ways, as long as it's returned.
    return err;
  },
});

const app = express();
server.applyMiddleware({ app });

app.listen({ port: 4000 }, async () => {
  console.log(`🚀 Server ready at http://localhost:4000${server.graphqlPath}`);
  console.log("Trying to connect via sequelize");
  await sequelize.sync();
  await sequelize.authenticate();
  console.log("=> Created a new connection.");
});
