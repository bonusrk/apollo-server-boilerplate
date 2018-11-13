const { isEmail } = require('validator');
const mongoose = require('../mongoose.js');

const { ObjectId } = mongoose.Schema.Types;

const schema = new mongoose.Schema(
  {
    name: {
      type: String,
      default: 'Dummy Name',
      unique: false,
    },
    nickname: {
      type: String,
    },
    email: {
      type: String,
      validate: [isEmail, 'Incorrect email'],
      required: true,
      unique: true,
      lowercase: true,
    },
    secretField: {
      type: String,
      select: false,
    },
    someList: {
      type: [ObjectId],
      ref: 'Dummy',
    },
  },
  {
    toObject: { virtuals: true },
  },
);

// compound index, to check only combination of fields to be unique in collection
schema.index({ nickname: 1, name: 1 }, { unique: true });

const Schema = mongoose.model('Dummy', schema);

module.exports = Schema;
