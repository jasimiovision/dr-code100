// '/api/defect'

const express = require("express");

// Note: NO MODELS REQUIRED AS WE ARE NOT UPDATING DB
// NOte: THIS IS JUST AN EXAMPLE PLAYGROUND

// Note: This middleware is executed after body-parser hence we can still use its functionality
const router = express.Router();
const s3 = require("../s3_config");

const models = require("../models/models");
const Project = models.project;
const Floorplan = models.floorplan;
const Keyframe = models.keyframe;
const Defect = models.defect;

// [DONE]
// TO DEMO SENDING API TO LOUTH'S SERVER (REQUIRE A NEW DEPENDENCY CALLED AXIOS)
// router.get('/send-api', (req, res, next) => {
//   // TODO: Need to test with Louth
//   axios.post("http://54.255.61.228/",
//             json = {
//               "input bucket" : "drone-client-upload",
//               "output bucket" : "drone-raw-data",
//               "project name" : "vopak-integration-test",
//               "videos": ["vopak01/videos/TK704 4CG.mp4","vopak01/videos/TK704 6CA.mp4", "vopak01/videos/TK704 6CD.mp4", "vopak01/videos/TK704 7CD.mp4"],
//               // "videos": ["vopak01/videos/TK704 4CG.mp4"],
//               "flight logs": ["vopak01/logs/4 01-01-1980 08-00-00.bin.log", "vopak01/logs/4 01-01-1980 08-00-00.bin.log", "vopak01/logs/4 01-01-1980 08-00-00.bin.log", "vopak01/logs/4 01-01-1980 08-00-00.bin.log"],
//               // "flight logs": ["vopak01/logs/4 01-01-1980 08-00-00.bin.log"],
//               "starting positions": [(5, 5), (5, 5), (5, 5), (5, 5)],
//               "left":5,
//               "right":95,
//               "bottom":95,
//               "top":5,
//               "height":50,
//               "width":50
//             })
//         .then(response => {
//           // console.log(response);
//           res.status(200).json({message: "Algorithm triggered"});
//         })
//         .catch(error => {
//           // console.log(error);
//           res.status(400).json({message: "Algorithm fail to run"})
//         })
// });

// [DONE]
// API TO CHECK IF PIPELINE RESULT LOADED IN DB
router.get('/check-loaded/:projectid', (req, res, next) => {
  // Check Loaded
  Project.findById(req.params.projectid)
  .then(projectData => {
    if(projectData){
      if(projectData.modelOutputLoaded){
        res.status(200).json({message: "success"});
      } else {
        res.status(400).json({message: "error"});
      }
    } else {
      res.status(400).json({message: "error"});
    }
  })
});

// [DONE]
// API TO UPDATE MongoDB Model Output Loaded to TRUE
router.get('/update-loaded/:projectid', (req, res, next) => {
  console.log(req.params.projectid);
  Project.updateOne({_id: req.params.projectid}, { modelOutputLoaded: true }).then(result => {
    if (result.nModified === 1) {
      res.status(200).json({message: "Updated Successfully"});
    } else {
      res.status(404).json({message: "Fail to Update"});
    }
  });
});

// [DONE]
// API TO CHECK IF FILE EXIST IN S3
router.post('/check-exist', (req, res, next) => {
  // Check Exist
  s3.headObject({Bucket: 'drone-raw-data', Key: req.body.fileId}, function(err, metadata) {
    if(err && err.code === 'NotFound') {
      res.status(404).json({'error': 'file does not exist'});
    } else {
      s3.getObject({Bucket: 'drone-raw-data', Key: req.body.fileId}, function (err, data) {
        if (err) {
          res.status(404).json({'error': 'cannot parse JSON'});
        } else {
          const json_body = JSON.parse(data.Body);
          res.status(200).json({message: 'parsed successfully', data: json_body});
        }
      })
    }
  })
});

// API TO PARSE JSON AND CONSOLE LOG THE INFORMATION
router.post('/parse-json/:projectId', (req, res, next) => {
  let keyframes = []
  let defects = []
  
  // Download + Parse JSON
  s3.getObject({Bucket: 'drone-raw-data', Key: req.body.fileId}, function (err, data) {
    if (err) {
      res.status(404).json({'error': 'cannot parse JSON'});
    } else {
      const json_body = JSON.parse(data.Body);
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
          const position_coordinates_x = keyframe.position_coordinates[0]+((mean(df.x)-0.5)*keyframe.fov_coordinates[0])
          const position_coordinates_y = keyframe.position_coordinates[1]+((mean(df.y)-0.5)*keyframe.fov_coordinates[1])
          
          const defect = new Defect({
            project_id: req.params.projectId,
            floorplan_id: req.body.flooplanId, /////// TO CHANGE 
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
      res.status(200).json({'keyframes': keyframes, "defects": defects});
      // res.status(200).json(json_body);
    }
  })
});

// [TO IMPLEMENT LATER]
// API TO SAVE OBJECT AS JSON AND UPLOAD TO S3
router.get('/save-upload-json', (req, res, next) => {
  // Save JSON
  const sample_json = {
    sample_data_1: {
      data: "hello",
      data2: "world",
      data3: 100,
      data4: ["a", "b", "c", "d"]
    },
    sample_data_2: {
      data: "hello_",
      data2: "world_",
      data3: 200,
      data4: ["e", "f", "g", "h"]
    }
  }

  // Upload S3
  sample_param = {
    Bucket: 'drone-raw-data',
    Key: 'test_dir/mongodb.json',
    Body: JSON.stringify(sample_json),
    ContentType: "application/json",
  }

  s3.putObject(sample_param, function (err, data) {
    if(err){
      res.status(400).json({message: "error saving"});
    } else {
      console.log(data);
      res.status(200).json({message: "successful upload"});
    }
  })

});


module.exports = router;
