const { gql } = require('apollo-server');
const DummyModel = require('../db/models').Dummy;

const Dummy = gql`
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

const dummyResolvers = {
  Query: {
    allDummy: async () => {
      const list = await DummyModel.find();
      return list;
    },
    dummy: async (root, { id }) => {
      const entity = await DummyModel.findById(id);
      return entity;
    },
  },
  Mutation: {
    createDummy: async (root, { dummy }) => {
      const entity = new DummyModel(dummy);
      const saved = await entity.save();
      return saved;
    },
  },
};

module.exports = { Dummy, dummyResolvers };
