module.exports = {
  extends: 'airbnb-base',
  env: {
    es6: true,
    browser: true,
    mocha: true,
  },
  rules: {
    'no-param-reassign': 0,
    'class-methods-use-this': 0,
    'no-underscore-dangle': 0,
    'newline-per-chained-call': ['error', { ignoreChainWithDepth: 3 }],
    'brace-style': ['error', 'stroustrup'],
    'no-var': ['off'],
    'one-var': ['off'],
    'func-names': 0,
  },
};
