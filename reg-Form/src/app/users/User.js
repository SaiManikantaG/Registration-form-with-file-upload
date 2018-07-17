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


//create user model for all the fields given in the front end. I am not sure about attachments
/* 
create model for this object here:
name: "Nimisha Bhushan Niyogi" => String, 
wsu: " das" => String, 
email: "nbniyogi@shockers.wichita.edu" => String, 
phone: 3165167431 => String ,
Color:"Grey" => String,
Subscribe:true => Boolean
details:"dagsg" => String
sign:" agdgag"  => String
*/