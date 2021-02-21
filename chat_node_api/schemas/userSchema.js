const {gql} = require('apollo-server-express');

const typeDef = gql`
type User {
    id: Int!
    firstName: String!
    lastName: String!
    email: String!
    profileImg: String!
}
`