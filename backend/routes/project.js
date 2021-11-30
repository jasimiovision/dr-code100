// '/api/project'

const express = require("express");
const multer = require('multer');
const multerS3 = require('multer-s3');
const jwt = require("jsonwebtoken");
const router = express.Router();

const models = require("../models/models");
const Project = models.project;
const Floorplan = models.floorplan;
const Keyframe = models.keyframe;
const Defect = models.defect;
const Report = models.report;
const User = require("../models/user");

const s3 = require("../s3_config");

const storage = multerS3({
    s3: s3,
    bucket: "drone-raw-data",
    key: function(req, file, cb){
      let projectPath = req.body.project_name.toString().replace(/\s+/g, '-').toLowerCase()
      let newFilename = projectPath + "/floorplan/" + Date.now() + file.originalname
      req.params.newFilename = newFilename
      cb(null, newFilename);
    }
  })

const uploadFloorplan = multer({
    storage: storage
})

function formatProjectPath(s){
    return s.toString().replace(/\s+/g, '-').toLowerCase()
} 
function formatFilename(s){
    return s.split(",").map(item => item.trim())
}

////////////////////////////////////////////////////////////////
//////////////////////  Check Loaded API //////////////////////
// Check if modelOutputloaded true/false in DB; if true => res(200)
// If false, check if identification.json exists in S3; if false => res(400)
// If it exist, get identification.json and parse into object
// get floorplan id
// Flatten structure
// Put into mongoDB
// set modelOutputLoaded = true
////////////////////////////////////////////////////////////////
router.get("/check-loaded/:projectId", (req, res, next) => {
    let project_path = ""
    let floorplans = []
    let keyframes = []
    let defects = []
    Project.findById(req.params.projectId)
    .then(projectData => {
        if(projectData){
            project_path = projectData.project_path
            if(projectData.modelOutputLoaded){
                res.status(200).json({message: "Model output is in MongoDB"});
            } else {
                ///
                // Check Exist
                s3.headObject({Bucket: 'drone-raw-data', Key: project_path+"/identification.json"}, function(err, metadata) {
                    if(err && err.code === 'NotFound') {
                        res.status(404).json({'error': 'file does not exist'});
                    } else {
                        
                        
                        Floorplan.find({project_id: req.params.projectId})
                        .then(allFloorplans => {
                            floorplans = allFloorplans
                            floorplanId = floorplans.find(fp => fp.custom ===false)._id
                            s3.getObject({Bucket: 'drone-raw-data', Key: project_path+"/identification.json"}, function (err, data) {
                                if (err) {
                                    res.status(404).json({'error': 'cannot parse JSON'});
                                } else {
                                    console.log(floorplanId)
                                    json_body = JSON.parse(data.Body);
                                    // res.status(200).json(json_body)
                    
                                    // preprocess json
                                    for(let [kf_key,kf_data] of Object.entries(json_body)){
                                        // extract keyframe objects
                                        const keyframe = new Keyframe({
                                            project_id: req.params.projectId,
                                            filename: kf_key,
                                            position_coordinates: kf_data.position,
                                            fov_coordinates: kf_data.fov,
                                            image_size: kf_data.image_size,
                                            verified_status: false,
                                        });
                                        keyframes.push(keyframe)
                                        // extract nested defect objects
                                        for(let df of Object.values(kf_data.regions)){
                                        // get defect position from keyframe position
                                        function mean(arr){
                                            return arr.reduce((prev, curr) => prev + curr) / arr.length;
                                        }
                                        ////// set position_coordinates w.r.t floorplan, 
                                        ////// with (0,0) being the top left corner, 
                                        ////// (1,1) being the bottom right corner

                                        // const position_coordinates_x = keyframe.position_coordinates[0]+((mean(df.x)-0.5)*0.05)
                                        // const position_coordinates_y = keyframe.position_coordinates[1]+((mean(df.y)-0.5)*0.05)
                                        const position_coordinates_x = keyframe.position_coordinates[0]+((mean(df.x)-0.5)*keyframe.fov_coordinates[0])
                                        const position_coordinates_y = keyframe.position_coordinates[1]+((mean(df.y)-0.5)*keyframe.fov_coordinates[1])

                                        const defect = new Defect({
                                            project_id: req.params.projectId,
                                            floorplan_id: floorplanId,
                                            keyframe_id: keyframe._id,
                                            position_coordinates:[position_coordinates_x, position_coordinates_y],
                                            x: df.x,
                                            y: df.y,
                                            defect_type: df.defect_type,
                                            verified_status: false
                                        })
                                        defects.push(defect)
                                        }
                                    }
                                    //// finished preprocess json ////
                                    //// update mongoDB defects, keyframes and project ////
                                    Keyframe.deleteMany({project_id: req.params.projectId})
                                    .then(() => {
                                        return Defect.deleteMany({project_id: req.params.projectId})
                                    })
                                    .then(() => {
                                        return Keyframe.insertMany(keyframes)
                                    })
                                    .then(() => {
                                        return Defect.insertMany(defects)
                                    })
                                    .then(() => {
                                        return Project.findOneAndUpdate({_id:req.params.projectId},{
                                            $set:{modelOutputLoaded: true}
                                        })
                                    })
                                    .then((result) => {
                                        res.status(200).json({ 
                                            message: result
                                        });
                                    })
                                    .catch( err => {
                                        console.log(err)
                                        res.status(400).json({message: err});
                                      });
                                }
                            })       
                        });


                    }
                })
                
            }
        } else {
            res.status(400).json({message: "Project.findById error"});
        }
    })
    
})

router.delete("/delete-loaded/:projectId", (req, res, next) => {
    Keyframe.deleteMany({project_id: req.params.projectId})
    .then(() => {
        return Defect.deleteMany({project_id: req.params.projectId})
    })
    .then(() => {
        return Project.findOneAndUpdate({_id:req.params.projectId},{
            $set:{modelOutputLoaded: false}
        })
    })
    .then((result) => {
        res.status(200).json({ 
            message: result
        });
    })
    .catch( err => {
        console.log(err)
        res.status(400).json({message: err});
      });
})

////////////////////////////////////////////////////////////////
//////////////////////  Upload Page API //////////////////////
// Upload floorplan to S3
// Initialise new project, report and floorplan
// Add new floorplan
// Add new project
// Send request to localisation server
////////////////////////////////////////////////////////////////

router.post("",uploadFloorplan.array('image_file', 1), (req, res, next) => {
    console.log(req.body)
    ////// Prepare data structure for mongoDB and S3 upload ///////
    const project = new Project({
        project_name: req.body.project_name,
        project_path: formatProjectPath(req.body.project_name),
        date_created: new Date(),
        video_filenames: formatFilename(req.body.video_filenames),
        flightlog_filenames: formatFilename(req.body.flightlog_filenames),
        modelOutputLoaded: false,
        project_type: "dr-one"
    })
    const report = new Report({
        header_data: "<h5> Sample Header </h5>",
        content: [{
            type: "editor",
            reportData: "<h2>Hello World!</h2><p>&nbsp;</p><p>You can start editing here!</p>"
        }],
        project_id: project._id.toString()
      });
    const floorplan = new Floorplan({
        project_id: project._id.toString(),
        filename: req.params.newFilename,
        custom: false,
        x_min_coordinate: req.body.left,
        x_max_coordinate: req.body.right,
        y_min_coordinate: req.body.bottom,
        y_max_coordinate: req.body.top,
        x_start_coordinates: JSON.parse(req.body.x_start_coordinates),
        y_start_coordinates: JSON.parse(req.body.y_start_coordinates),
        actual_height: req.body.height,
        actual_width: req.body.circumference
    });
    let start_positions = []
    for(let i=0; i<floorplan.x_start_coordinates.length; i++){
        start_positions.push( [floorplan.x_start_coordinates[i],floorplan.y_start_coordinates[i]] )
    }
    const pending_project = {
        "input bucket" : "drone-client-upload",
        "output bucket" : "drone-raw-data",
        "project name" : project.project_path,
        "videos": project.video_filenames,
        "flight logs": project.flightlog_filenames,
        "starting positions": start_positions,
        "left": floorplan.x_min_coordinate,
        "right": floorplan.x_max_coordinate,
        "top": floorplan.y_max_coordinate,
        "bottom": floorplan.y_min_coordinate,
        "height": floorplan.actual_height,
        "width": floorplan.actual_width
    }
    const updatePermissionPromise = () => new Promise((resolve,reject) => {
        req.body.permission = [...req.body.permission, project._id.toString()]
        User.updateOne({username: req.body.username, role: {$in: ["user", "client"]}}, {permission:req.body.permission}).then(result => {
            if (result.n !== 0) { resolve(result) } 
            else { reject(result) }
          })
    })
    const s3Promise = () => new Promise((resolve, reject) => {
        /////// 1) fetch pending.json from S3 ///////
        s3.getObject({Bucket: 'drone-raw-data', Key: "pending.json"}, function (err, data) {
            if (err) { reject(err) } 
            else {
                /////// 2) parse pending.json and append pending_project ///////
                let projects = JSON.parse(data.Body);
                console.log("projects: ", projects)
                projects = projects.filter(project => {
                    // console.log(project["project name"],pending_project["project name"])
                    return project["project name"] != pending_project["project name"]
                })
                projects.push(pending_project)
                const json_body = JSON.stringify(projects); 
                /////// 3) post pending.json to S3 ///////
                s3.putObject({
                    Bucket: 'drone-raw-data',
                    Key: "pending.json",
                    Body: json_body,
                    ContentType: "application/json"
                }, function (err, data) {
                    if (err) { reject(err) } 
                    else { resolve(data) }
                })
            }
        })
    })
    // only create if project name doesn't exist before
    Project.exists({ project_name: req.body.project_name })
    .then(isExist => {
        if(isExist) {
            res.status(400).json({message: "Project with same Project Name already exist"})
        } else {
            // return axios.post("http://54.255.61.228/",pending_project)
            const promises = [
                project.save(),
                report.save(),
                floorplan.save(),
                s3Promise(),
            ]
            if(req.body.role == "user"){promises.push(updatePermissionPromise())}
            Promise.all(promises)
            .then((response) => {
                // issue new JWT token with updated permissions
                const token = jwt.sign(
                    {username: req.body.username, role: req.body.role, permission: req.body.permission},
                    "SOME_SECRET_KEY_TO_CHANGE_LATER",
                    { expiresIn: "1h"}
                );
                res.status(201).json({
                    message: "Project "+project.project_name+" added successfully",
                    project: project,
                    report: report,
                    floorplan: floorplan,
                    token: token,
                    expiresIn: "3600"
                });
            })
            .catch( err => {
                console.log(err)
                res.status(400).json({message: "Error Creating Project"});
            });
        }
    })
    

});

////////////////////////////////////////////////////////////////
//////////////////////  New report-only project //////////////////////
// Add new project
// Initialise report
////////////////////////////////////////////////////////////////

router.post("/report", (req, res, next) => {
    const project = new Project({
        project_name: req.body.project_name,
        project_path: formatProjectPath(req.body.project_name),
        date_created: new Date(),
        video_filenames: [],
        flightlog_filenames: [],
        modelOutputLoaded: true,
        project_type: "report"
    })
    const report = new Report({
        header_data: "<h5> Sample Header </h5>",
        content: [{
            type: "editor",
            reportData: "<h2>Hello World!</h2><p>&nbsp;</p><p>You can start editing here!</p>"
        }],
        project_id: project._id,
        thumbnail_key: ""
    });
    const updatePermissionPromise = () => new Promise((resolve,reject) => {
        req.body.permission = [...req.body.permission, project._id.toString()]
        User.updateOne({username: req.body.username, role: {$in: ["user", "client"]}}, {permission:req.body.permission}).then(result => {
            if (result.n !== 0) { resolve(result) } 
            else { reject(result) }
          })
    })
    // only create if project name doesn't exist before
    Project.exists({ project_name: req.body.project_name })
    .then(isExist => {
      if(isExist) {
        res.status(400).json({message: "Project with same Project Name already exist"})
      } else {
        const promises = [
            project.save(),
            report.save(),
        ]
        if(req.body.role == "user"){promises.push(updatePermissionPromise())}
        Promise.all(promises)
        .then((response) => {
            // issue new JWT token with updated permissions
            const token = jwt.sign(
                {username: req.body.username, role: req.body.role, permission: req.body.permission},
                "SOME_SECRET_KEY_TO_CHANGE_LATER",
                { expiresIn: "1h"}
            );
            res.status(201).json({
                message: "Project "+project.project_name+" added successfully",
                project: project,
                report: report,
                token: token,
                expiresIn: "3600"
            });
        })
        .catch( err => {
            console.log(err)
            res.status(400).json({message: "Error Creating Project"});
        });
      }
    })
})
////////////////////////////////////////////////////////////////
// Delete project
// and delete corresponding floorplans, keyframes, defects.
// TODO: remove project ID from user permissions, remove Project if it is in pending.json
// and delete project folder on S3
////////////////////////////////////////////////////////////////
router.delete("/:id", (req, res, next) => {
    let project_path;
    const mongoDbDeletes = [
        Floorplan.deleteMany({project_id: req.params.id}),
        Keyframe.deleteMany({project_id: req.params.id}),
        Defect.deleteMany({project_id: req.params.id}),
        Report.deleteMany({project_id: req.params.id})
    ]
    Project.findById(req.params.id).then(project => {
        // extract folder path to delete from s3
        project_path = project.project_path
        // Delete project from mongoDB
        return Project.deleteOne({ _id: req.params.id })
    })
    .then(() => {
        return Promise.all(mongoDbDeletes)
    })
    .then(() => {
        // Promise that checks and delete from S3
        const deleteFromS3Promise = (bucket) => new Promise((resolve, reject) => {
            const listParams = {
                Bucket: "",
                Prefix: project_path
            }
            listParams.Bucket = bucket
            s3.listObjects(listParams, function(err, data){
                if(err){ reject(err) }
                if(data.Contents.length){ // if there are files in S3 to delete
                    const deleteParams = {
                        Bucket: bucket,
                        Delete: {Objects:[]}
                    }
                    deleteParams.Delete.Objects = data.Contents.map((el) => {
                        return {Key: el["Key"]}
                    })
                    // Batch delete
                    s3.deleteObjects(deleteParams, function(err,data){
                        if(err){ reject(err) }
                        resolve(data)
                    })
                } else { // if there are no files in S3 to delete
                    resolve(data)
                }
            })
        })
        // Check and delete from both drone-raw-data and drone-report-data
        const s3Deletes = [
            deleteFromS3Promise("drone-raw-data"), 
            deleteFromS3Promise("drone-report-data")
        ]
        return Promise.all(s3Deletes)
    })
    .then(()=>{
        res.status(200).json({ message: "Report Deleted Successfully"})
    })
    .catch((err) => {
        res.status(400).json({ message: err });
    })
});

////////////////////////////////////////////////////////////////
// Fetch all projects
////////////////////////////////////////////////////////////////
router.get("/all", (req, res, next) => {
    Project.find().then(allProjects => {
        res.status(200).json({
            message: 'Fetched Successfully',
            data: allProjects
        });
    });
});

////////////////////////////////////////////////////////////////
// Fetch project by Id
////////////////////////////////////////////////////////////////
router.get("/:projectId", (req, res, next) => {
    Project.findById(req.params.projectId).then(project => {
        if (project) {
        res.status(200).json({data: project});
        } else {
        res.status(404).json({ message: "Project not found!" });
        }
    });
});

////////////////////////////////////////////////////////////////
// Update project by Id (add meta data)
////////////////////////////////////////////////////////////////
router.put("/:projectId", (req, res, next) => {
    Project.findOneAndUpdate({_id: req.params.projectId }, {
        $set: req.body.update
        // e.g. {"update":{
        // 	    "video_filenames": ["Vopak1.mp4","Vopak2.mp4"],
        //     "flightlog_filenames": ["Vopak1.bin.log", "Vopak2.bin.log"]}}
    })
    .then(result => {
      res.status(200).json({ message: "Data Updated Successfully"})
    });
  });


module.exports = router;


////////////////////////////////////////////////////////////////
//////////////////////  Load MockDB API //////////////////////
////////////////////////////////////////////////////////////////
// router.get("/getMockDB/:projectId", (req, res, next) => {
//     let project_path = ""
//     let floorplans = []
//     let keyframes = []
//     let defects = []
//     Project.findById(req.params.projectId)
//     .then(projectData => {
//         project_path = projectData.project_path                        
//         Floorplan.find({project_id: req.params.projectId})
//         .then(allFloorplans => {
//             floorplans = allFloorplans
//             floorplanId = floorplans.find(fp => fp.custom ===false)._id
//             s3.getObject({Bucket: 'drone-raw-data', Key: project_path+"/identification.json"}, function (err, data) {
//                 if (err) {
//                     res.status(404).json({'error': 'cannot parse JSON'});
//                 } else {
//                     console.log(floorplanId)
//                     json_body = JSON.parse(data.Body);
//                     // res.status(200).json(json_body)
    
//                     // preprocess json
//                     for(let [kf_key,kf_data] of Object.entries(json_body)){
//                         // extract keyframe objects
//                         const keyframe = new Keyframe({
//                             project_id: req.params.projectId,
//                             filename: kf_key,
//                             position_coordinates: kf_data.position,
//                             fov_coordinates: kf_data.fov,
//                             image_size: kf_data.image_size,
//                             verified_status: false,
//                         });
//                         keyframes.push(keyframe)
//                         // extract nested defect objects
//                         for(let df of Object.values(kf_data.regions)){
//                         // get defect position from keyframe position
//                         function mean(arr){
//                             return arr.reduce((prev, curr) => prev + curr) / arr.length;
//                         }

//                         // mapping defect to keyframe FOV
//                         const position_coordinates_x = keyframe.position_coordinates[0]+((mean(df.x)-0.5)*0.05)
//                         const position_coordinates_y = keyframe.position_coordinates[1]+((mean(df.y)-0.5)*0.05)
//                         // const position_coordinates_x = keyframe.position_coordinates[0]+((mean(df.x)-0.5)*keyframe.fov_coordinates[0])
//                         // const position_coordinates_y = keyframe.position_coordinates[1]+((mean(df.y)-0.5)*keyframe.fov_coordinates[1])
                        
//                         const defect = new Defect({
//                             project_id: req.params.projectId,
//                             floorplan_id: floorplanId,
//                             keyframe_id: keyframe._id,
//                             position_coordinates:[position_coordinates_x, position_coordinates_y],
//                             x: df.x,
//                             y: df.y,
//                             defect_type: df.defect_type,
//                             verified_status: false
//                         })
//                         defects.push(defect)
//                         }
//                     }
//                     //// finished preprocess json ////
//                     console.log("GET KEYFRAME & FLOORPLAN URLS")
//                     for (const kf of keyframes) {
//                         const params2 = {
//                             Bucket: 'drone-raw-data',
//                             Key: kf.filename,
//                             Expires: 60 * 120
//                         }
//                         kf.filename = s3.getSignedUrl('getObject', params2)                                        
//                     }
//                     for (const fp of floorplans) {
//                         const params2 = {
//                             Bucket: 'drone-raw-data',
//                             Key: fp.filename,
//                             Expires: 60 * 120
//                         }
//                         fp.filename = s3.getSignedUrl('getObject', params2)                                        
//                     }
//                     res.status(200).json({"defects":defects, "keyframes":keyframes, "floorplans":floorplans});
                    
//                 }
//             })       
//         });
//     })
//     .catch((err) => {
//         res.status(400).json({ message: "error when processing json block: "+err });
//     })
// });

// router.put("/:id", (req, res, next) => {
// const project = new Project({
//     _id: req.body.id,
//     title: req.body.title,
//     content: req.body.content
// });
// Project.updateOne({ _id: req.params.id }, project).then(result => {
//     res.status(200).json({ message: "Update successful!" });
// });
// });

// router.get("", (req, res, next) => {
// Project.find().then(documents => {
//     res.status(200).json({
//     message: "Posts fetched successfully!",
//     posts: documents
//     });
// });
// });

// router.get("/:id", (req, res, next) => {
// Project.findById(req.params.id).then(project => {
//     if (project) {
//     res.status(200).json(project);
//     } else {
//     res.status(404).json({ message: "Project not found!" });
//     }
// });
// });

// router.delete("/:id", (req, res, next) => {
// Project.deleteOne({ _id: req.params.id }).then(result => {
//     console.log(result);
//     res.status(200).json({ message: "Project deleted!" });
// });
// });



// create new project
// router.post("", (req, res, next) => {
//     console.log(req.body);
//     const project = new Project({
//         project_name: req.body.project_name,
//         date_created: new Date()
//     });
//     let project_name = req.body.project_name
//     let isFirstProject = false;
//     // check if it is first project
//     AllProjects.find()
//         // add new project
//         .then(allProjects => {
//             isFirstProject = (allProjects.length == 0)
//             return project.save()
//         })
//         //and update parent: all projects
//         .then(createdProject => {
//             if (isFirstProject){ // if first project, initialise allProjects
//                 const allProjects = new AllProjects({
//                     project_names: [createdProject.project_name],
//                     project_ids: [createdProject._id]
//                 });
//                 return allProjects.save()
//             }else{ // don't need filter since there is only one "AllProjects object"
//                 return AllProjects.findOneAndUpdate({
//                     $push: {
//                         project_names: createdProject.project_name,
//                         project_ids: createdProject._id
//                     }
//                 })
//             }
//         })
//         //and return res to front-end
//         .then(updatedProjects => {
//             res.status(201).json({
//                 message: "Project "+project_name+" added successfully",
//             });
//         })
//         .catch((message) => {
//             console.log(message);
//         });
// });