module.exports = {
  secret: 'mysecret',
  root: process.cwd(),
  apollo: {
    responseErrorLevel: 3,
    debug: true,
  },
  mongoose: {
    uri: 'mongodb://root:root@localhost:27017/',
    debug: false,
    log: false,
  },
};
