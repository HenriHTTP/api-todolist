const works =  require('../models/works'); 
const express = require('express');
const router = express.Router();  


exports.CheckIdExistence = async (req,res,next)=> { 
    try{ 
        const {id} = req.params 
        const found = await works.findByPk(id)

        if(!found){ 
            return res.status(404).json({ message: 'id not found.' })
        }
        next(); 
    }catch(err){ 
        res.status(404).json({'message':"id not found" +err})
    }
}
