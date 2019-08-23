const { addMockFunctionsToSchema, makeExecutableSchema } = require('graphql-tools');
const { graphql } = require('graphql');
const { gql } = require('apollo-server');
const { merge } = require('lodash');
const chai = require('chai');
const typeDef = require('../../../src/typeDefs/dummy');
// const resolver = require('../../../src/resolvers/dummy');

const { expect } = chai;

const Query = gql`
  type Query {
    _empty: String
  }
  type Mutation {
    _empty: String
  }
`;

const q = `
    query{
        dummy(id:1){
            name
            email
            nickname
        }
    }
`;

const schema = makeExecutableSchema({
  typeDefs: merge([Query, typeDef]),
  // resolvers:merge([{}, resolver]);
});

// default mocks adds 'Hello World' to String field
addMockFunctionsToSchema({ schema });

describe('Dummy Schema', () => {
  it('Dummy SUCCESS', async () => {
    const {
      data: { dummy },
    } = await graphql(schema, q);
    expect(dummy).to.have.property('name', 'Hello World');
    expect(dummy).to.have.property('email', 'Hello World');
    expect(dummy).to.have.property('nickname', 'Hello World');
  });
});
