const { gql } = require('apollo-server');
const { merge } = require('lodash');
const dummy = require('../typeDefs/dummy');

const Query = gql`
  type Query {
    _empty: String
  }
  type Mutation {
    _empty: String
  }
`;

module.exports = merge([Query, dummy]);
