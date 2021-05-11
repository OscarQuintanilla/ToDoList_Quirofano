const mongoose = require('mongoose');
const { Schema } = mongoose;

const categorySchema = new Schema({
  nameCategory: String,
});

mongoose.model('category', categorySchema);