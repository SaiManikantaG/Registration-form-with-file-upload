var mongoose = require('mongoose');

module.exports = mongoose.model('User', {
  name: String,
  wsu: String,
  email: String,
  phone: String,
  Color: String,
  details: String,
  subscribe: Boolean,
  sign: String,
  FileName: String
})
