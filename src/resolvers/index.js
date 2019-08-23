const { merge } = require('lodash');
const dummy = require('../resolvers/dummy');

const defaultResolvers = {};

const resolvers = merge([defaultResolvers, dummy]);

module.exports = resolvers;
