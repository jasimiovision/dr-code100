// '/api/report'

const express = require("express");
// Note: This middleware is executed after body-parser hence we can still use its functionality
const router = express.Router();

const multer = require('multer');
const multerS3 = require('multer-s3');
const path = require('path');

const models = require("../models/models");
const Report = models.report;

const checkAuth = require("../middleware/check-auth");
const checkPermission = require("../middleware/check-permission");

const s3 = require("../s3_config");

//////////////////////////
// For CKeditor simple image upload adaptor to call
const reportImageUpload = multer({
    storage: multerS3({
      s3: s3,
      bucket: "drone-report-data",
      acl: 'public-read',
      key: function(req, file, cb){
        console.log(req)
        console.log(file)
        let folderName = req.header('FolderName').toString().replace(/\s+/g, '-').toLowerCase()
        let newFilename = folderName + "/report-images/" + Date.now() + file.originalname
        req.params.newFilename = newFilename
        cb(null, newFilename);
      }
    }),
    fileFilter: function(req, file, cb) {
      const filetypes = /jpeg|jpg|png/;
      const extname = filetypes.test(path.extname(file.originalname).toLowerCase());
      const mimetype = filetypes.test(file.mimetype);
      if (mimetype && extname) {
          return cb(null, true);
      } else {
          cb("Error: Allow images only of extensions jpeg|jpg|png !");
      }
    }
})

const thumbnailImageUpload = multer({
  storage: multerS3({
    s3: s3,
    bucket: "drone-report-data",
    acl: 'public-read',
    key: function(req, file, cb){
      let projectPath = req.body.projectName.toString().replace(/\s+/g, '-').toLowerCase()
      let newFilename = projectPath + "/thumbnail/thumbnail.jpeg"
      req.params.newFilename = newFilename
      cb(null, newFilename);
    }
  })
})

//////////////////////////
// Return a single report sepcified by the project ID
// after that, get thumbnail URL
// Only this API is using the ProjectID (the remaining are using the reportID)
router.get("/:projectid", checkAuth, checkPermission, (req, res, next) => {
  Report.findOne({ project_id: req.params.projectid }).then( reportData => {
    if (reportData) {
      if(reportData.thumbnail_key){
        const params = {
          Bucket: 'drone-report-data',
          Key: reportData.thumbnail_key
        }
        s3.headObject(params, function(err, metadata) {
          if(!err) {
            const accessible_url = s3.getSignedUrl('getObject', params)
            reportData.thumbnail_key = accessible_url
          }
          res.status(200).json({data: reportData});
        })
      } else {
        res.status(200).json({data: reportData});
      }
    } else {
      res.status(404).json({message: "Report with project ID not found!"})
    }
  })
})


// Save a new entry to the database (with a new unique ID)
// One project can only have one report
router.post("", checkAuth, (req, res, next) => {

  Report.exists({ project_id: req.body.projectId }).then( isExist => {
    if (isExist) {
      res.status(400).json({message: "Report with said projectId already exist"})
    } else {
      const report = new Report({
        header_data: "",
        content: req.body.reportContent,
        project_id: req.body.projectId
      });

      report.save()
        .then(newReport => {
          console.log(newReport);
          res.status(201).json({
            message: "Added Successfully",
            id: newReport._id
          });
        })
        .catch( err => {
          res.status(400).json({message: "Error Creating Report"});
        });
    }
  })
});

// For CKeditor simple image upload adaptor to call
router.post("/report-image", reportImageUpload.single('image_file'), (req, res, next) => {
  res.status(201).json({
    message: "Added Successfully",
    url: req.file.location
  });
});
// Update thumbnail in s3
router.post("/thumbnail", thumbnailImageUpload.single('thumbnailImage'), (req, res, next) => {
  Report.updateMany({_id: req.body.id }, { 
    thumbnail_key: req.params.newFilename
  })
  .then(result => {
    const params = {
      Bucket: 'drone-report-data',
      Key: req.params.newFilename
    }
    const accessible_url = s3.getSignedUrl('getObject', params)
    res.status(200).json({
      message: "Thumbnail Updated Successfully.",
      url: accessible_url
    });
  });
});

// Update entire report corresponding to the given report ID with new info
router.put("/full/:id", checkAuth, (req, res, next) => {
  Report.updateOne({_id: req.params.id }, { 
    content: req.body.reportContent,
    header_data: req.body.headerData
  })
  .then(result => {
    res.status(200).json({
      message: "Report Updated Successfully."
    });
  })
  .catch((err)=>{
    res.status(404).json({message: err});
  })
});

// Update header content corresponding to the given report ID
router.put("/header/:id", checkAuth, (req, res, next) => {
  Report.updateOne({_id: req.params.id }, { 
    header_data: req.body.headerData,
  })
  .then(result => {
    res.status(200).json({
      message: "Header Updated Successfully."
    });
  })
  .catch((err)=>{
    res.status(404).json({message: err});
  })
});

// Update footer content corresponding to the given report ID
router.put("/footer/:id", checkAuth, (req, res, next) => {
  Report.updateOne({_id: req.params.id }, { 
    footer_data: req.body.footerData,
  })
  .then(result => {
    res.status(200).json({
      message: "Footer Updated Successfully."
    });
  })
  .catch((err)=>{
    res.status(404).json({message: err});
  })
});
 
// Update report content corresponding to the given report ID with new info
router.put("/:id", checkAuth, (req, res, next) => {

  Report.updateOne({_id: req.params.id }, { content: req.body.reportContent })
  .then(result => {
    res.status(200).json({
      message: "Report Updated Successfully."
    });
  })
  .catch((err)=>{
    res.status(404).json({message: err});
  })
});


// Delete a particular data with report ID that matches the given ID
//    ':id' indicated dynamic ID value
// DON'T NEED TO HAVE THIS
router.delete("/:id", checkAuth, (req, res, next) => {

  Report.deleteOne({_id: req.params.id}).then(result => {
    if (result.deletedCount == 0) {
      res.status(400).json({message: "Report with said Id does not exist"})
    } else {
      res.status(200).json({message: "Report Deleted Successfully"})
    }
  });
});


module.exports = router;
