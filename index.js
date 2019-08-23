/* eslint-disable no-console */
const chalk = require('chalk');
const config = require('config');
const server = require('./src/server');
const mongoose = require('./src/libs/mongoose');

mongoose
  .connect(
    config.get('mongoose.uri'),
    {
      poolSize: 5,
      keepAlive: 1,
      useCreateIndex: true,
      useNewUrlParser: true,
    },
  )
  .then(
    () => config.get('mongoose.log')
      && console.log(`Mongoose connected to ${chalk.blue(config.get('mongoose.uri'))}`),
  );

const db = mongoose.connection;

if (config.get('mongoose.log')) {
  db.once('open', () => {
    console.log(chalk.green('Mongoose connection established'));
  });
  db.on('error', (error) => {
    console.log(error);
  });
  db.once('disconnected', () => {
    console.log(chalk.green('Mongoose connection closed'));
  });
}

server
  .listen({ port: 4000 })
  // eslint-disable-next-line no-console
  .then((s) => {
    s.server.on('close', async () => {
      await mongoose.disconnect();
    });
    console.log(`🚀 Server ready at ${chalk.blue(`http://localhost:4000${server.graphqlPath}`)}`);
    console.log(`Environment is ${chalk.green(process.env.NODE_ENV)}`);
  });
