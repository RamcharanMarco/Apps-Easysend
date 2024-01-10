const mongoose = require('mongoose')

const Schema = mongoose.Schema

const projectSchema = new Schema({
    photo:{
        type: String,
    },
    arr:{
        type: Array,
    },
    name:{
        type: String,
    },
    user_id:{
        type: String,
    },
    description:{
        type: String,
    },
    repo:{
        type: String,
    },
    demo:{
        type: String,
    },
    type:{
        type: String,
    },
    lib:{
        type: String,
    },
    lang:{
        type: String,
    },
    db:{
        type: String,
    },
    css:{
        type: String,
    },
    hosting:{
        type: String,
    }
},
{timestamps: true})

module.exports = mongoose.model('project', projectSchema)

