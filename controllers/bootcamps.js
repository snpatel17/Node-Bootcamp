// @desc        Get all bootcamps
//@routes       GET /api/v1/bootcamps
//@access       Public
exports.getBootCamps = (req, res, next) => {
  res.status(200).json({ success: true, msg: 'Show all bootcamps' });
};

// @desc        Get a single bootcamp
//@routes       GET /api/v1/bootcamps/:id
//@access       Public
exports.getBootCamp = (req, res, next) => {
  res
    .status(200)
    .json({ success: true, msg: `Show Bootcamp ${req.params.id}` });
};

// @desc        Create Bootcamp
//@routes       POST /api/v1/bootcamps
//@access       Public
exports.createBootCamp = (req, res, next) => {
  res.status(200).json({ success: true, msg: 'Create bootcamps' });
};

// @desc        Update Bootcamp
//@routes       PUT /api/v1/bootcamps/:id
//@access       Public
exports.updateBootCamp = (req, res, next) => {
  res
    .status(200)
    .json({ success: true, msg: `Update Bootcamp ${req.params.id}` });
};

// @desc        Delete Bootcamp
//@routes       DELETE /api/v1/bootcamps/:id
//@access       Public
exports.deleteBootCamp = (req, res, next) => {
  res
    .status(200)
    .json({ success: true, msg: `Delete Bootcamp ${req.params.id}` });
};
