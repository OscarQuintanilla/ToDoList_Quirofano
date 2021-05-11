const mongoose = require('mongoose');
const { Schema } = mongoose;

const listSchema = new Schema({
  nameList: String,
  category: String,
  user: String,
  items: []
});

mongoose.model('list', listSchema);