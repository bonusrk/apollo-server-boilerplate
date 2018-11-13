const {
  AuthenticationError,
  ApolloError,
  UserInputError,
  ForbiddenError,
} = require('apollo-server');

module.exports = {
  forbidden: (message = 'Forbidden') => {
    throw new ForbiddenError(message);
  },
  auth: (message = 'Unauthorized') => {
    throw new AuthenticationError(message);
  },
  unprocess: () => {
    throw new UserInputError();
  },
  custom: ({ code, message = 'Error', payload = {} }) => {
    throw new ApolloError(message, code, payload);
  },
};
