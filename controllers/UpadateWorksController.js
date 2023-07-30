const express = require('express');
const router = express.Router();  
const { Op, where } = require('sequelize');
const works =  require('../models/works');


exports.AltByPK = async (req,res) => { 
        
    try{ 
        const {title,description,status} = req.body;
        const {id} =  req.params;
        const foundWork = await works.findByPk(id)// search id

         foundWork.title = title;
         foundWork.description = description;
         foundWork.status = status;
         await foundWork.save();
        
         res.status(200).json(req.body);

    }catch(err){ 
        res.status(500).json({"message":"erro ao atualizar"+err})
    }
}
