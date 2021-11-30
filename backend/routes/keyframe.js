// '/api/keyframe'

const express = require("express");
const router = express.Router();

const models = require("../models/models");
const Keyframe = models.keyframe;
const Defect = models.defect;
const Eidthistory = require("../models/edithistory");

const s3 = require("../s3_config");


////////////////////////////////////////////////////////////////
// Get all verified keyframes and extract s3 filepaths
// Query get all of the child defects 
// Compile and update/(delete&upload) master-mongodb.json to s3 for retraining
////////////////////////////////////////////////////////////////
router.post("/retrain", (req, res, next) => {    
    const master_mongodb = {}
    const kf_ids = []
    Keyframe.find({verified_status: true})
    .then(allKeyframes => {
        for (let kf of allKeyframes){
            kf_ids.push(kf._id);
            master_mongodb[kf._id] = {
                filename: kf.filename,
                image_size: kf.image_size,
                defects:[]
            };
        }
        return Defect.find({keyframe_id: {$in: kf_ids}})
    })
    .then((defectsArray) => {
        for (let defect of defectsArray){
            newDefect = {x: defect.x, y: defect.y, defect_type: defect.defect_type}

            master_mongodb[defect.keyframe_id].defects.push(newDefect)
        }
        json_body = JSON.stringify(master_mongodb);
        s3.putObject({
            Bucket: 'drone-raw-data',
            Key: "mongodb-master.json",
            Body: json_body,
            ContentType: "application/json"
          }, function (err, data) {
            if (err) { res.status(404).json({'error': err})}
            else{
                res.status(201).json({
                    master_mongodb: master_mongodb,
                });
            }
          })
    });
});

////////////////////////////////////////////////////////////////
// Update keyframe by id (edit page - verified status true)
// Delete old child defects 
// Add new child defects (edit page - verified status true)
////////////////////////////////////////////////////////////////
router.put("/verify/:keyframeId", (req, res, next) => {
    console.log(req.params.keyframeId, req.body.defects)
    // Update keyframe by id
    Keyframe.findOneAndUpdate({_id: req.params.keyframeId }, {
        $set:{verified_status: true}
    })
    // Delete old child defects 
    .then(() => {
        return Defect.deleteMany({keyframe_id: req.params.keyframeId })
    })
    // Add new child defects (expect project_id, floorplan_id, keyframe_id, verified=true)
    .then(() => {

        return Defect.insertMany(req.body.defects)
    }).then(() =>{
         var datetime = new Date();
         
        Eidthistory.insertMany({keyframe_id:req.params.keyframeId,username:req.body.username,edit_at:datetime})
})
    
    .then(e => {
        res.status(201).json({
            message: "Verified keyframes and defects!"
        });
    })
})

////////////////////////////////////////////////////////////////
// Get keyframe by id (viz page - from selected defect)
////////////////////////////////////////////////////////////////
router.get("/:id", (req, res, next) => {
    Keyframe.findOne({_id: req.params.id}).then(keyframe => {
        const params2 = {
            Bucket: 'drone-raw-data',
            Key: keyframe.filename,
            Expires: 60 * 120
        }
        keyframe.filename = s3.getSignedUrl('getObject', params2)    
        res.status(200).json({
            message: 'Fetched Successfully',
            data: keyframe
        });
    });
});

////////////////////////////////////////////////////////////////
// Get all keyframes and retrieve URL from S3
////////////////////////////////////////////////////////////////
router.get("/all/project/:projectId", (req, res, next) => {
    Keyframe.find({project_id: req.params.projectId}).then(allKeyframes => {
        for (const kf of allKeyframes) {
            const params2 = {
                Bucket: 'drone-raw-data',
                Key: kf.filename,
                Expires: 60 * 120
            }
            kf.filename = s3.getSignedUrl('getObject', params2)                                        
        }
        res.status(200).json({
            message: 'Fetched Successfully',
            data: allKeyframes
        });
    });
});


////////////////////////////////////////////////////////////////
// Get all unverified keyframes (edit page)
////////////////////////////////////////////////////////////////
router.get("/unverified/project/:projectId", (req, res, next) => {
    Keyframe.find({project_id: req.params.projectId, verified_status: false}).then(allKeyframes => {
        res.status(200).json({
            message: 'Fetched Successfully',
            data: allKeyframes
        });
    });
});

////////////////////////////////////////////////////////////////
// Get all edti history keyframes (edit page)
////////////////////////////////////////////////////////////////

router.get("/verify/eidthistory/:keyframeId", (req, res, next) => {
 
  Eidthistory.find({keyframe_id: req.params.keyframeId}).then(allData => {
    res.status(200).json({
      data: allData
    });
  });
});


module.exports = router;

////////////////////////////////////////////////////////////////
// Optional: Delete keyframe image from s3
// and delete keyframe by id (if no defects inside)
// and delete child defects (keyframe_filenames)
////////////////////////////////////////////////////////////////
// router.delete("/:keyframeId", (req, res, next) => {
//     // delete keyframe by id
//     Keyframe.deleteOne({_id: req.params.keyframeId})
//     // delete child defects
//     .then((result) => {
//         console.log(result)
//         return Defect.deleteMany({keyframe_id: req.params.keyframeId})
//     })
//     .then((result) => {
//         console.log(result)
//         res.status(200).json({ message: "Keyframe and defects deleted!" });
//     })
//     .catch((err) => {
//         res.status(404).json({ message: err });
//     })
// })

// ////////////////////////////////////////////////////////////////
// // (If identification.json exists and modelOutputLoaded = false) => Only called once per project:
// // TODO: fetch json from s3 and preprocess
// // Add many keyframes  
// // Add many defects
// // TODO: set project's modelOutputLoaded = true to prevent loading output again (double copy).
// ////////////////////////////////////////////////////////////////
// router.post("/all/:projectId", (req, res, next) => {    
    
//     // TODO: Read json from S3
//     // TODO: Preprocess
//     let keyframes = req.body.keyframes; // just for mockdata
//     let defects = req.body.defects; // just for mockdata
//     // for keyframe in json:
//     //     for defect in keyframe:
//             // append keyframe and defect objects

//     // insert array of keyframe objects
//     Keyframe.insertMany(keyframes)
//     .then(newKeyframes => {
//         keyframes = newKeyframes;
//         for (let i=0; i<defects.length; i++){
//             defects[i].keyframe_id = newKeyframes[i]._id.toString() // 1to1 mapping just for mockdata purposes
//         }
//         // insert array of defect objects
//         return Defect.insertMany(defects)
//     })
//     .then(newDefects => {
//         defects = newDefects;
//         res.status(201).json({
//             message: "Added Successfully",
//             newKeyframes: keyframes,
//             newDefects: defects
//         });
//     })
//     .catch((message) => { 
//         console.log(message);
//     });
// });

// ////////////////////////////////////////////////////////////////
// // Optional: Upload new keyframe to s3 and get filename(s3)
// // Add new keyframe (viz page - custom add defect)
// // Add new defect (default: verified status = false)
// ////////////////////////////////////////////////////////////////
// router.post("/:projectId", (req, res, next) => {
//     // console.log(req.body);
//     const keyframe = new Keyframe({
//         project_id: req.params.projectId, // take from params
//         filename: req.body.keyframe.filename, // TODO: take from s3 response
//         position_coordinates: req.body.keyframe.position_coordinates,
//         image_size: req.body.keyframe.image_size,
//         verified_status: req.body.keyframe.verified_status,
//     });
//     const defect = new Defect({
//         project_id: req.params.projectId, // take from params
//         floorplan_id: req.body.defect.floorplan_id,
//         keyframe_id: "", // to take from keyframe response
//         position_coordinates: req.body.defect.position_coordinates,
//         x: req.body.defect.x,
//         y: req.body.defect.y,
//         defect_type: req.body.defect.defect_type,
//         defect_severity: req.body.defect.defect_severity,
//         defect_comment: req.body.defect.defect_comment,
//         verified_status: req.body.defect.verified_status
//     });
//     keyframe.save()
//     .then(newKeyframe => {
//         keyframe._id = newKeyframe._id
//         defect.keyframe_id = newKeyframe._id
//         return defect.save()
//     })
//     //and return res to front-end
//     .then(newDefect => {
//         defect._id = newDefect._id
//         res.status(201).json({
//             message: "Added successfully",
//             keyframe: keyframe,
//             defect: defect
//         });
//     })
//     .catch((message) => { 
//         console.log(message);
//     });
// });