// '/api/defect'

const express = require("express");
const router = express.Router();

const models = require("../models/models");
const Defect = models.defect;


////////////////////////////////////////////////////////////////
// Get defects by keyframe id (edit page)
////////////////////////////////////////////////////////////////
router.get("/keyframe/:keyframeId", (req, res, next) => {
    Defect.find({keyframe_id: req.params.keyframeId}).then(allDefects => {
        res.status(200).json({
            message: 'Fetched Successfully',
            data: allDefects
        });
        
    });
});

////////////////////////////////////////////////////////////////
// Get all defects by floorplan (viz page)
////////////////////////////////////////////////////////////////
router.get("/floorplan/:floorplanId", (req, res, next) => {
    Defect.find({floorplan_id:req.params.floorplanId}).then(allDefects => {
        res.status(200).json({
            message: 'Fetched Successfully',
            data: allDefects
        });
    });
});

////////////////////////////////////////////////////////////////
// Update defect by id (viz page - replace the values
////////////////////////////////////////////////////////////////
router.put("/:id", (req, res, next) => {
    const defect = new Defect({
        _id: req.params.id,
        floorplan_id: req.body.floorplan_id,
        keyframe_id: req.body.keyframe_id,
        position_coordinates: req.body.position_coordinates,
        x: req.body.x,
        y: req.body.y,
        defect_type: req.body.defect_type,
        defect_severity: req.body.defect_severity,
        defect_comment: req.body.defect_comment,
        verified_status: req.body.verified_status
    })
    Defect.findOneAndUpdate({_id: req.params.id }, defect).then(result => {
      res.status(200).json({ message: "Data Updated Successfully"})
    });
  });
////////////////////////////////////////////////////////////////
// Update all defects by floorplan id (viz page - replace the coordinates
////////////////////////////////////////////////////////////////
router.put("/all/:floorplanId", (req, res, next) => {
    Defect.deleteMany({floorplan_id: req.params.floorplanId })
    .then(() => {
        return Defect.insertMany(req.body.defects)
    })
    .then(e => {
        res.status(201).json({
            message: "Verified keyframes and defects!"
        });
    })
  });

////////////////////////////////////////////////////////////////
// Delete defect by id (viz page) 
////////////////////////////////////////////////////////////////
router.delete("/:id", (req, res, next) => {
    Defect.deleteOne({ _id: req.params.id }).then(() => {
        res.status(200).json({ message: "Defect deleted!" });
    })
});

module.exports = router;

// Extras:
// ////////////////////////////////////////////////////////////////
// // Get all defects by project (viz page)
// ////////////////////////////////////////////////////////////////
// router.get("/project/:projectId", (req, res, next) => {
//     Defect.find({project_id: req.params.projectId}).then(allDefects => {
//         res.status(200).json({
//             message: 'Fetched Successfully',
//             data: allDefects
//         });
//     });
// });