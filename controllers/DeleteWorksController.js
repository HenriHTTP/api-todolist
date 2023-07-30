const express = require('express');
const router = express.Router();  
const { Op, where } = require('sequelize');
const works =  require('../models/works')


exports.DeleteWork = async (req, res) => {
    try {
      const {id} =req.params
      const foundWork = await works.findByPk( id ) // search id

        await foundWork.destroy()
      
         res.json({"message":"works delete with sucess"})
    } catch (err) {
      
        res.status(500).json({" message": err });
    }
  };