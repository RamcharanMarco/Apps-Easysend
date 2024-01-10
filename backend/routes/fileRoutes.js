const express = require('express')
const router = express.Router()
const multer = require('multer');
const { v4: uuidv4 } = require('uuid');
let path = require('path');
const Project = require('../models/projectModel')

const storage = multer.diskStorage({
    destination: function(req, file, cb) {
        cb(null, 'files');
    },
    filename: function(req, file, cb) {   
        cb(null,uuidv4() + '-' + Date.now() + path.extname(file.originalname));
    }
});


let upload = multer({ storage});


router.post('/',upload.any(), async(req, res) => {
    const user_id = req.user._id
    const url = req.protocol + '://' + req.get('host')
    let photosList = req.files
    photosList = photosList.forEach((img) => image.path = url+'/images/'+img.filename);

    for(let file in photosList){
        try{
            const x = await Photo.create({file})
            console.log(x)
        }catch(error){
            res.status(400).json({error : error.message})
            console.log(error)
        }
        res.json('sucess').status(200)
    }

    //we will need to send email with nodemailer
    //then add the files as attachments
    //these files will not be saved in the database
    //run a cron job that will delete all files after 3 days

});

module.exports = router



