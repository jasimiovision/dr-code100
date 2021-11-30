const express = require("express");
const models = require("../models/models");
// const AllProjects = models.allProjects;
const Project = models.project;
const Floorplan = models.floorplan;
const Keyframe = models.keyframe;
const Defect = models.defect;
const Report = models.report;

// Note: This middleware is executed after body-parser hence we can still use its functionality
const router = express.Router();

// const allProjects = new AllProjects({
//     project_names: ['Vopak 2018', 'Vopak 2019', 'Vopak 2020'],
//     project_ids: ['vopak_2018_id', 'vopak_2019_id', 'vopak_2020_id']
// });





// called to set up demo database, won't ever be called in production
router.post("/populate", (req, res, next) => {
    ////////// instantiate highest level object (allProjects) and save allProjectsId
    const allProjects = new AllProjects({
        project_names: ['Vopak 2018', 'Vopak 2019', 'Vopak 2020'],
        project_ids: ['vopak_2018_id', 'vopak_2019_id', 'vopak_2020_id']
    });
    allProjects.save().then(newData => {
        const allProjectsId = newData._id;
        AllProjects.find().then(allProjects => {
            res.status(200).json({
              message: 'Fetched Successfully',
              allProjectsid: allProjectsId,
              data: allProjects
            });
        });
    });
    ////////// create 3 demo projects and populate the first
    

    //////////
});

module.exports = router;