// '/api/floorplan'

const express = require("express");
const router = express.Router();

const models = require("../models/models");
const Project = models.project;
const Floorplan = models.floorplan;
const Defect = models.defect;

const s3 = require("../s3_config");

////////////////////////////////////////////////////////////////
// Add new floorplan
// Optional: Add floorplan image to S3
////////////////////////////////////////////////////////////////
router.post("/:projectId", (req, res, next) => {
    const floorplan = new Floorplan({
        project_id: req.body.project_id,
        filename: req.body.filename,
        custom: req.body.custom,
        x_min_coordinate: req.body.x_min_coordinate,
        x_max_coordinate: req.body.x_max_coordinate,
        y_min_coordinate: req.body.y_min_coordinate,
        y_max_coordinate: req.body.y_max_coordinate,
        x_start_coordinates: req.body.x_start_coordinates,
        y_start_coordinates: req.body.y_start_coordinates,
        x_start_values: req.body.x_start_values,
        y_start_values: req.body.y_start_values,
        actual_height: req.body.actual_height,
        actual_width: req.body.actual_width
    })
    floorplan.save()
    // update parent: add id to project schema (floorplan_ids)
    .then(newFloorplan => {
        floorplan._id = newFloorplan._id
        //and return res to front-end
        res.status(201).json({
            message: "Floorplan "+floorplan.filename+" added successfully",
            newFloorplan: floorplan
        });
        // return Project.findOneAndUpdate({_id: req.params.projectId},
        //     {$push: {floorplan_ids: floorplan._id.toString()}
        // })
    })
    // .then( () => {
    //     res.status(201).json({
    //         message: "Floorplan "+floorplan.filename+" added successfully",
    //         newFloorplan: floorplan
    //     });
    // })
    .catch((message) => { 
        console.log(message);
    });
})

///////////////////////////////////////////////////////////////
// Delete floorplan by id 
// and remove respective defects to avoid memory leak
////////////////////////////////////////////////////////////////
router.delete("/:id", (req, res, next) => {
    // let projectId;
    Floorplan.findOne({_id: req.params.id}).then(floorplan => {
        // projectId = floorplan.project_id;
        return Floorplan.deleteOne({ _id: req.params.id })
    })    
    // .then(() => {
    //     return Project.findOneAndUpdate({_id: projectId},
    //         {$pull: {floorplan_ids: req.params.id}})
    // })
    .then((res) => {
        console.log(res)
        return Defect.deleteMany({floorplan_id: req.params.id})
    })
    .then(() => {
        res.status(200).json({ message: "Floorplan deleted!" });
    })
    .catch((message) => { 
        console.log(message);
    });
});

////////////////////////////////////////////////////////////////
// Get floorplan by id
// Get floorplan URL from S3
////////////////////////////////////////////////////////////////

router.get("/:id", (req, res, next) => {
    Floorplan.findOne({_id: req.params.id})
    .then(floorplan => {
        const params2 = {
            Bucket: 'drone-raw-data',
            Key: floorplan.filename,
            Expires: 60 * 120
        }
        floorplan.filename = s3.getSignedUrl('getObject', params2)              
        res.status(200).json({
            message: 'Fetched Successfully',
            data: floorplan
        });
    })
});

////////////////////////////////////////////////////////////////
// Get all floorplans from this project
// Get floorplan URLs from S3
////////////////////////////////////////////////////////////////
router.get("/project/:projectId", (req, res, next) => {
    Floorplan.find({project_id: req.params.projectId}).then(allFloorplans => {
        for (const fp of allFloorplans) {
            const params2 = {
                Bucket: 'drone-raw-data',
                Key: fp.filename,
                Expires: 60 * 120
            }
            fp.filename = s3.getSignedUrl('getObject', params2)                                        
        }
        res.status(200).json({
            message: 'Fetched Successfully',
            data: allFloorplans
        });
    });
});

////////////////////////////////////////////////////////////////
// Update floorplan by id (entire object)
////////////////////////////////////////////////////////////////
router.put("/object/:id", (req, res, next) => {
    const floorplan = new Floorplan({
        _id: req.params.id,
        project_id: req.body.project_id,
        filename: req.body.filename,
        custom: req.body.custom,
        image_size: req.body.image_size,
        x_min_coordinate: req.body.x_min_coordinate,
        x_max_coordinate: req.body.x_max_coordinate,
        y_min_coordinate: req.body.y_min_coordinate,
        y_max_coordinate: req.body.y_max_coordinate,
        x_start_coordinates: req.body.x_start_coordinates,
        y_start_coordinates: req.body.y_start_coordinates,
        x_start_values: req.body.x_start_values,
        y_start_values: req.body.y_start_values,
        actual_height: req.body.actual_height,
        actual_width: req.body.actual_width
    })
    Floorplan.findOneAndUpdate({_id: req.params.id }, floorplan).then(result => {
      res.status(200).json({ message: "Data Updated Successfully"})
    });
  });

// update floorplan by id (object values)
router.put("/values/:id", (req, res, next) => {
    Floorplan.findOneAndUpdate({_id: req.params.id }, {
        $set: req.body.update 
        // e.g. {"update":{
        // 	    "image_size": [1920,1080],
        //     "defect_ids": ["defectid12345"]}}
    })
    .then(result => {
      res.status(200).json({ message: "Data Updated Successfully"})
    });
  });



module.exports = router;