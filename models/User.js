const mongoose = require('mongoose');
const { Schema } = mongoose;

const userSchema = new Schema({
  user: String,
  name: String,
  password: String,
  job: String
});

mongoose.model('user', userSchema);