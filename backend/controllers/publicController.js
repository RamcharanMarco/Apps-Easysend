const Project = require('../models/projectModel')
const mongoose = require('mongoose')



//get single
const getProject = async (req, res) =>{
    const _id = req.params._id
    try{
        const projects = await Project.findOne({_id})
        res.status(200).json(projects)
    }catch(error){
        res.status(400).json({error : error.message})
    }
}

//get single
const getProjects = async (req, res) =>{
    try{
        const projects = await Project.find({})
        res.status(200).json(projects)
    }catch(error){
        res.status(400).json({error : error.message})
    }
}

const getProjects2 = async (req, res) =>{
    const searchQuery = req.query.query
    let queryFilter = (searchQuery !== 'all' || !searchQuery) ? {
        type:{
            $regex : searchQuery,
            $options : 'i',
        }
    }
    :
    {}
    try{
        const projects = await Project.find({...queryFilter}).sort({createdAt: -1})
        res.status(200).json(projects)
    }catch(error){
        res.status(400).json({error : error.message})
    }
}

module.exports = {
    getProject,
    getProjects
}


