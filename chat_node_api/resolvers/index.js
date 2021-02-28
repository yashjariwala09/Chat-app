const userResolver = require("./userResolver");
const  { mergeResolvers } = require('@graphql-tools/merge');
module.exports = mergeResolvers([
    userResolver
])