const { makeExecutableSchema } = require('graphql-tools');
const { gql } = require('apollo-server');
const { merge } = require('lodash');
const resolvers = require('./resolvers');
const { Dummy, dummyResolvers } = require('./controllers/dummy');

// Inspired by https://blog.apollographql.com/modularizing-your-graphql-schema-code-d7f71d5ed5f2
// Modulize schema to make its part more atomic and readable

const Query = gql`
  type Query {
    _empty: String
  }
  type Mutation {
    _empty: String
  }
`;

const schema = makeExecutableSchema({
  typeDefs: merge([Query, Dummy]),
  resolvers: merge(resolvers, dummyResolvers),
  schemaDirectives: {},
});

module.exports = schema;
