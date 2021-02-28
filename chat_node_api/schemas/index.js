const  userType  = require( "./userSchema");
const  { mergeTypeDefs } = require('@graphql-tools/merge');
const types = [
    userType,
  ]
module.exports = mergeTypeDefs(types);