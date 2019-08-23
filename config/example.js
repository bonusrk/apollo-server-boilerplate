module.exports = {
  secret: 'mysecret',
  root: process.cwd(),
  apollo: {
    responseErrorLevel: 1,
    debug: true,
  },
  mongoose: {
    uri: 'mongodb://root:example@localhost:27017/example?authSource=admin',
    debug: false,
    log: false,
  },
};
