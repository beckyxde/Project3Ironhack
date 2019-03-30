const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const Collection = require('../models/collection-model');

const userSchema = new Schema(
  {
    name: String,
    email: String,
    password: String,
    collections: [{ type: Schema.Types.ObjectId, ref: 'Collection' }]
  },
  {
    timestamps: true,
    toJSON: {
      transform: function (doc, ret) {
        delete ret.password;
        delete ret.__v;
        return ret
      }
    }
  });

const User = mongoose.model('User', userSchema);
module.exports = User;