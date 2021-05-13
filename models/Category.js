const mongoose = require('mongoose');
const { Schema } = mongoose;

const categorySchema = new Schema({
  id: String,
  nameCategory: String,
  user: String,
});

mongoose.model('category', categorySchema);