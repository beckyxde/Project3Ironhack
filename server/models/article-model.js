const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const articleSchema = new Schema({
  title: String,
  image: File,
  timestamp: Date,
  URL: String
});

const Article = mongoose.model('Article', articleSchema); //might need to add collection as a 3rd param?
module.exports = Article;