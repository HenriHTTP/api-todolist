const express = require('express');
const router = express.Router();  
const { Op, where } = require('sequelize');
const works =  require('../models/works');

exports.CreateWorks = async (req,res) => { 
        
    try{ 
        const {title,description,status} = req.body
        const newWorks = await works.create( { title,  description, status } )
        res.status(200).json(newWorks)

    }catch(err){ 
        res.status(500).json({"message":"bad request status 500"+err})
    }
}

