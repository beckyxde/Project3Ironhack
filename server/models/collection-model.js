const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const User = require('../models/user-model');

const CollectionSchema = new Schema({
  title: String,
  owner: { type: Schema.Types.ObjectId, ref: 'User' },
  items: [String],
});

const Collection = mongoose.model('Collection', CollectionSchema); //might need to add collection as a 3rd param?
module.exports = Collection;