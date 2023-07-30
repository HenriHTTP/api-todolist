const express = require('express');
const router = express.Router();  
const { Op, where } = require('sequelize');
const works =  require('../models/works');


exports.FindAllWorks = async (req, res) => {
  try {
    const datas = await works.findAll();
    res.json(datas);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};