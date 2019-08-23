const { gql } = require('apollo-server');

const type = gql`
  extend type Query {
    allDummy: [Dummy]
    dummy(id: ID!): Dummy
  }
  type Dummy {
    name: String
    email: String
    nickname: String
    someList: [Dummy]
  }
  input DummyInput {
    name: String
    email: String
    nickname: String
    secretField: String
    someList: [String]
  }
  extend type Mutation {
    createDummy(dummy: DummyInput): Dummy
  }
`;

module.exports = type;
