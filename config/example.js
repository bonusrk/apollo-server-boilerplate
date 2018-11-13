module.exports = {
  secret: 'mysecret',
  root: process.cwd(),
  apollo: {
    responseErrorLevel: 1,
    debug: true,
  },
  mongoose: {
    uri: 'mongodb://localhost:27017/asb',
    debug: false,
    log: false,
  },
};
