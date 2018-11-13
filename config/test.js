module.exports = {
  secret: 'mysecret',
  root: process.cwd(),
  apollo: {
    responseErrorLevel: 3,
    debug: false,
  },
  mongoose: {
    uri: 'mongodb://localhost:27017/asb_test',
    debug: false,
    log: false,
  },
};
