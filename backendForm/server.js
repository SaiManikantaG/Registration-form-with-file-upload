var express = require('express')
var app = express()
var multer = require('multer')
var crypto = require('crypto')
var mime = require('mime')
var mongoose = require('mongoose')
var formidable = require('formidable')
var http = require('http')
var User = require('./models/User');
var cors = require('cors');
var bodyPaser = require('body-parser');
var multer = require('multer');
var crypto = require('crypto');
var mime = require('mime');
var nodemailer = require('nodemailer');

app.use(cors())
app.use(bodyPaser.json())

app.get('/', (req, res) => {
  res.send('hello world')
})

// Sai Create & Send Email Endpoint
app.post('/create', (req, res) => {

  var user = req.body;
  // ******************************************************************************** 
  nodemailer.createTestAccount((err, account) => {
    // create reusable transporter object using the default SMTP transport
    let transporter = nodemailer.createTransport({
      host: 'smtp.gmail.com',
      port: 587,
      secure: false, // true for 465, false for other ports

      // Really BAD Basic AUTH, need to change this to OAuth
      auth: {
        user: `AddUser@Email.com`, // generated ethereal user
        pass: `User@Password` // generated ethereal password
      },
      tls: {
        rejectUnauthorized: false,
      },
    });
    // get file extension
    // setup email data with unicode symbols
    let mailOptions = {
      from: '"Register App 👻" <register@example.com>', // sender address
      to: 'AddYour@User.email', // list of receivers
      subject: 'Hello ✔', // Subject line
      text: 'Hello world?', // plain text body
      html: `<b>Hello world?</b> 
      User Data : ${JSON.stringify(user)}`, // html body
      attachments: [{ // file on disk as an attachment; get the same name from database saved event
        filename: user.FileName,
        path: __dirname + '/upload/' + user.FileName // stream this file
      }]
    };

    // send mail with defined transport object
    transporter.sendMail(mailOptions, (error, info) => {
      if (error) {
        return console.log(error);
      }
      console.log('Message sent: %s', info.messageId);
      // Preview only available when sending through an Ethereal account
      console.log('Preview URL: %s', nodemailer.getTestMessageUrl(info));

      // Message sent: <b658f8ca-6296-ccf4-8306-87d57a0b4321@example.com>
      // Preview URL: https://ethereal.email/message/WaQKMgKddxQDoou...
    });
  });
  // ********************************************************************************
  var userData = req.body;
  var user = new User(userData);
  user.save((err, result) => {
    if (err)
      console.log(err)
    res.sendStatus(200)
  })
})

// Sai - Form upload Endpoint
app.post('/upload/:name', function uploadAudio(req, res) {
  var fileName = req.params.name;

  // Store the files in /upload folder inside root directory
  var tmpUploadsPath = './upload'
  var storage = multer.diskStorage({
    destination: tmpUploadsPath,
    filename: function (req, file, cb) {
      crypto.pseudoRandomBytes(16, function (err, raw) {
        // set filename to the passed filename in the endpoint
        cb(null, fileName);
      });
    }
  });
  var upload = multer({
    storage: storage
  }).any();

  upload(req, res, function (err) {
    if (err) {
      console.log(err);
      return res.end('Error');
    } else {
      // console.log(`upload-req-body:`);
      // console.log(req.body);
      req.files.forEach(function (item) {
        console.log(`upload-item:` + JSON.stringify(item));
        // move your file to destination
        // Moving file to destination End
      });
      res.end('File uploaded');
    }
  });
});
// Form upload End point End
// Sai Create Endpoint End



mongoose.connect('<<Add your MONGODB connection string here>>', {
  useNewUrlParser: true
}, (err) => {
  if (!err)
    console.log('connected to mongo')
})



app.listen(3000)