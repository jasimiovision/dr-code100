const express = require("express");

const SliderData = require("../models/sliderInfo");

// Note: This middleware is executed after body-parser hence we can still use its functionality
const router = express.Router();

// Return all data from the database
router.get("", (req, res, next) => {
  SliderData.find().then(allData => {
    res.status(200).json({
      message: 'Fetched Successfully',
      data: allData
    });
  });
});

// Return a single data sepcified by the ID
router.get("/:id", (req, res, next) => {
  SliderData.findById(req.params.id).then( singleData => {
    if (singleData) {
      res.status(200).json(singleData);
    } else {
      res.status(404).json({message: "Data with ID not found!"})
    }
  })
})

// Save a new entry to the database (with a new unique ID)
router.post("", (req, res, next) => {
  const sliderData = new SliderData({
    player: req.body.player,
    slider_value: req.body.value
  });

  sliderData.save().then(newData => {
    res.status(201).json({
      message: "Added Successfully",
      id: newData._id
    });
  });
});

// Update data corresponding to the given ID with new info
router.put("/:id", (req, res, next) => {
  const updatedData = new SliderData({
    _id: req.body.id,
    player: req.body.player,
    slider_value: req.body.value
  });
  SliderData.updateOne({_id: req.params.id }, updatedData).then(result => {
    res.status(200).json({ message: "Data Updated Successfully"})
  });
});

// Delete a particular data with ID that matches the given ID
//    ':id' indicated dynamic ID value
router.delete("/:id", (req, res, next) => {
  SliderData.deleteOne({_id: req.params.id}).then(result => {
    res.status(200).json({message: "Post Deleted Successfully"})
  });
});

module.exports = router;
