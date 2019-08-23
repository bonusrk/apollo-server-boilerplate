const mongoose = require('mongoose');
const config = require('config');

mongoose.Promise = Promise;
mongoose.set('debug', config.get('mongoose.debug'));

module.exports = mongoose;
