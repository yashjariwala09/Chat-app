const express = require("express");
const { ApolloServer, gql } = require("apollo-server-express");
const sequelize = require("./database/dbConfig");
const { models } = require("./models/index")
const typeDefs = require("./schemas")
const resolvers =require("./resolvers")


const server = new ApolloServer({ typeDefs, resolvers, context: () => ({
  models
}) });

const app = express();
server.applyMiddleware({ app });

app.listen({ port: 4000 },async () => {
  console.log(`🚀 Server ready at http://localhost:4000${server.graphqlPath}`);
  console.log('Trying to connect via sequelize')
  await sequelize.sync()
  await sequelize.authenticate()
  console.log('=> Created a new connection.')
});
