const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const userSchema = new Schema(
  {
    name: String,
    email: String,
    password: String,
    collections: {
      type: Array, default: [
        {
          "Favorites": [9486025, 19485442]
        },
        {
          "four": [19485376]
        }
      ]
    }
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