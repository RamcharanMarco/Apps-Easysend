const express = require('express')
const router = express.Router()
const multer = require('multer');
const { v4: uuidv4 } = require('uuid');
let path = require('path')
var nodemailer = require('nodemailer');

const storage = multer.diskStorage({
    destination: function(req, file, cb) {
        cb(null, 'files');
    },
    filename: function(req, file, cb) {   
        cb(null,uuidv4() + '-' + Date.now() + path.extname(file.originalname));
    }
});


let upload = multer({ storage});

var transporter = nodemailer.createTransport({
    host: "smtp-mail.outlook.com", // hostname
    secureConnection: false, // TLS requires secureConnection to be false
    port: 587, // port for secure SMTP
    tls: {
       ciphers:'SSLv3',
       rejectUnauthorized: false
    },
    auth: {
        user: 'jobfinder1956@outlook.com',
        pass: 'Marco@outlook1999'
    }
});


router.post('/',upload.any(), async(req, res) => {
    console.log('hello')
    console.log(req.files[1])
    req.files.forEach( file => console.log(file.originalname))
    let attachments = []
    req.files.forEach( (file, index) => attachments.push(
        {
            filename: `file${index+1}`,
            path: req.protocol + '://' + req.get('host')+`/files/${file.filename}`,
            contentType: file.mimetype
        }
    ))

    console.log('attachments array', attachments)

    try{
        var mailOptions = {
            from: '"jobfinder " <jobfinder1956@outlook.com>', // sender address (who sends)
            to: req.body.emailto, // list of receivers (who receives)
            subject: 'files', // Subject line
            /*text: 'Hello world ', // plaintext body*/
            html: `<p>email from ${req.body.emailfrom}</p><h1>${req.body.message}</h1> ` ,// html body
            attachments: attachments,
        };
        
        // send mail with defined transport object
        transporter.sendMail(mailOptions, function(error, info){
            if(error){
                return console.log(error);
            }
            console.log('Message sent: ' + info.response);
            res.status(200).json('sucess')
        });
    }catch(error){
        console.log(error)
        res.status(400).json({error : error.message})
    }
});

module.exports = router






        /*var mailOptions = {
            from: '"jobfinder " <jobfinder1956@outlook.com>', // sender address (who sends)
            to: 'miguelmarcoramcharan@gmail.com', // list of receivers (who receives)
            subject: 'response to job post', // Subject line
            /*text: 'Hello world ', // plaintext body
            html: `<h1>hello sucker</h1>` ,// html body
            attachments: [
                {
                filename: '1.png',
                path: req.protocol + '://' + req.get('host')+'/files/1.png',
                contentType: 'image/png'
              },
              {
                filename: '1.png',
                path: req.protocol + '://' + req.get('host')+'/files/2.png',
                contentType: 'image/png'
              }
            ],
        };*/
        