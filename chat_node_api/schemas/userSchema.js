const { gql } = require("apollo-server-express");

const userType = gql`
type User {
    id: ID!
    firstName: String!
    lastName: String!
    email: String!
    role: Int!
}
type Query {
    userById( id: ID! ): User!
    allUser: [User!]!
}

type Mutation {
    createUser(firstName: String!, lastName: String!, email: String!, password: String!, role: Int!): User!
}
`;



 

module.exports = userType;
