const { gql } = require("apollo-server-express");

const userType = gql`
type User {
    id: ID!
    firstName: String!
    lastName: String!
    email: String!
    role: Int!
}

type LoginUser {
    email: String!
    message: String!
}

type Query {
    userById( id: ID! ): User!
    allUser: [User!]!
    login( email: String!, password: String! ): LoginUser!
}

type Mutation {
    createUser(firstName: String!, lastName: String!, email: String!, password: String!, role: Int!): User!
}
`;



 

module.exports = userType;
