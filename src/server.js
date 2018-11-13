const { ApolloServer } = require('apollo-server');
const config = require('config');
const schema = require('./schema');

const server = new ApolloServer({
  schema,
  cors: true,
  mocks: false,
  context: () => {},
  debug: config.get('apollo.debug'),
  subscriptions: {},
  formatError: (error) => {
    if (config.get('apollo.responseErrorLevel') < 2) return error;
    const { message, extensions, path } = error;
    return {
      message,
      path,
      code: extensions.code,
    };
  },
});

module.exports = server;
