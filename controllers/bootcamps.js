const { json } = require('express');
const Bootcamp = require('../models/Bootcamp');

// @desc        Get all bootcamps
//@routes       GET /api/v1/bootcamps
//@access       Public
exports.getBootCamps = async (req, res, next) => {
  try {
    const bootcamps = await Bootcamp.find();

    res.status(200).json({ success: true, data: bootcamps });
  } catch (err) {
    res.status(400).json({
      success: false,
    });
  }
};

// @desc        Get a single bootcamp
//@routes       GET /api/v1/bootcamps/:id
//@access       Public
exports.getBootCamp = async (req, res, next) => {
  try {
    const bootcamp = await Bootcamp.findById(req.params.id);
    if (!bootcamp) {
      return res.status(400).json({ success: false });
    }

    res.status(200).json({ success: true, data: bootcamp });
  } catch (err) {
    res.status(400).json({ success: false });
  }
};

// @desc        Create Bootcamp
//@routes       POST /api/v1/bootcamps
//@access       Public
exports.createBootCamp = async (req, res, next) => {
  const bootcamp = await Bootcamp.create(req.body);

  try {
    res.status(201).json({
      success: true,
      data: bootcamp,
    });
  } catch (err) {
    res.status(400).json({
      success: false,
    });
  }
};

// @desc        Update Bootcamp
//@routes       PUT /api/v1/bootcamps/:id
//@access       Public
exports.updateBootCamp = async (req, res, next) => {
  try {
    const bootcamp = await Bootcamp.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
      runValidators: true,
    });
    if (!bootcamp) {
      return res.status(400).json({ success: false });
    }
    res.status(200).json({ success: true, data: bootcamp });
  } catch (err) {
    res.status(400).json({ success: false });
  }
};

// @desc        Delete Bootcamp
//@routes       DELETE /api/v1/bootcamps/:id
//@access       Public
exports.deleteBootCamp = async (req, res, next) => {
  try {
    const bootcamp = await Bootcamp.findByIdAndDelete(req.params.id);
    if (!bootcamp) {
      return res.status(400).json({ success: false });
    }
    res.status(200).json({ success: true, data: {} });
  } catch (err) {
    res.status(400).json({ success: false });
  }
};
