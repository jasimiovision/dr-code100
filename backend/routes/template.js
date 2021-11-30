// '/api/template'

const express = require("express");
// Note: This middleware is executed after body-parser hence we can still use its functionality
const router = express.Router();

const multer = require('multer');
const multerS3 = require('multer-s3');
const path = require('path');
const models = require("../models/models");
const Report = models.report;
const Template = models.template;

const checkAuth = require("../middleware/check-auth");
const checkPermission = require("../middleware/check-permission");

const s3 = require("../s3_config");

///////////////////////////////////
// For CKeditor simple image upload adaptor to call
const templateImageUpload = multer({
  storage: multerS3({
    s3: s3,
    bucket: "drone-report-data", 
    acl: 'public-read',
    key: function(req, file, cb){
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
      bucket: "drone-template-data",
      acl: 'public-read',
      key: function(req, file, cb){
        let templateId = req.body.templateId
        let newFilename = templateId + "/thumbnail/thumbnail.jpeg"
        req.params.newFilename = newFilename
        cb(null, newFilename);
      }
    })
})

////////////////////////////////////////////////////////////////
// For CKeditor simple image upload adaptor to call
////////////////////////////////////////////////////////////////
router.post("/template-image", templateImageUpload.single('image_file'), (req, res, next) => {
    res.status(201).json({
      message: "Added Successfully",
      url: req.file.location
    });
  });

////////////////////////////////////////////////////////////////
//////////// Create New Template ////////////
////////////////////////////////////////////////////////////////
router.post("", (req, res, next) => {
    const template = new Template({
        template_name: req.body.template_name,
        content:[{
          type: "editor",
          reportData:""
        }]
    })
    template.save()
    .then(newTemplate => {
        res.status(201).json({
        message: newTemplate.template_name +" Added Successfully",
        newTemplate: newTemplate
        });
    })
})
////////////////////////////////////////////////////////////////
//////////// Clone Report into Template ////////////
// 1) fetch report thumbnail key
// 2) clone report thumbnail on s3 to template thumbnail
// 3) update template thumbnail_key and save new template
////////////////////////////////////////////////////////////////
router.post("/cloneReport/:reportId", (req, res, next) => {
    const template = new Template({
        header_data: req.body.header_data,
        content: req.body.content,
        template_name: req.body.template_name,
        template_description: req.body.template_description,
    })
    //// 1) fetch report thumbnail key
    Report.findOne({ _id: req.params.reportId }).then( reportData => {
        if (reportData) {
            const newKey = template._id + "/thumbnail/thumbnail.jpeg"
            const params = {
                Bucket: "drone-template-data", 
                CopySource: "/drone-report-data/" + reportData.thumbnail_key, 
                Key: newKey
            };    
            //// 2) clone report thumbnail on s3 to template thumbnail        
            s3.copyObject(params, function(err, data) {
                if (err) console.log(err, err.stack); // an error occurred
                else { // successful response
                    template.thumbnail_key = newKey
                    //// 3) update template thumbnail_key and save new template
                    template.save()
                    .then(newTemplate => {
                          res.status(201).json({
                            message: newTemplate.template_name +" Added Successfully",
                            newTemplate: newTemplate
                          });
                    })
                    .catch( err => {
                        res.status(400).json({message: "Error Creating Template"});
                    });
                }
            });
        } else {
          res.status(404).json({message: "Report with project ID not found!"})
        }
    })
})

////////////////////////////////////////////////////////////////
//////////// Get all Templates ////////////
// Get all templates and retrieve URL from S3
// Note: have to define /all before /:templateID (next API) if not it will take "all" as a templateID
////////////////////////////////////////////////////////////////
router.get("/all", (req, res, next) => {
    Template.find()
    .then(allTemplates => {
        for (const tp of allTemplates) {
            if(tp.thumbnail_key){
                const params2 = {
                    Bucket: 'drone-template-data',
                    Key: tp.thumbnail_key,
                    Expires: 60 * 120
                }
                tp.thumbnail_key = s3.getSignedUrl('getObject', params2)
            }
        }
        res.status(200).json(allTemplates);
        return;
    })
    .catch( err => {
        console.log(err)
        res.status(404).json({message: "Template not found!", err:err})
        return;
    });
});

////////////////////////////////////////////////////////////////
//////////// Get Template by ID ////////////
// Get a single template sepcified by the template ID
// after that, get thumbnail URL from S3
////////////////////////////////////////////////////////////////
router.get("/:templateId", (req, res, next) => {
    Template.findOne({ _id: req.params.templateId })
    .then( templateData => {
        res.status(200).json(templateData);
    })
    .catch( err => {
        res.status(404).json({message: "Template not found!"})
    });
})

////////////////////////////////////////////////////////////////
//////////// Save/ Update Template ////////////
////////////////////////////////////////////////////////////////
router.put("/:templateId", (req, res, next) => {
    Template.updateOne({_id: req.params.templateId }, {
        header_data: req.body.header_data,
        content: req.body.content,
        template_name: req.body.template_name,
        template_description: req.body.template_description
    })
    .then(result => {
      res.status(200).json({
        message: "Template Updated Successfully."
      });
    })
    .catch((err)=>{
      res.status(404).json({message: err});
    })
});

////////////////////////////////////////////////////////////////
//////////// Update thumbnail in s3 ////////////
////////////////////////////////////////////////////////////////
router.post("/thumbnail", thumbnailImageUpload.single('thumbnailImage'), (req, res, next) => {
    Template.updateOne({_id: req.body.templateId }, { 
      thumbnail_key: req.params.newFilename
    })
    .then(result => {
      const params = {
        Bucket: 'drone-template-data',
        Key: req.params.newFilename
      }
      const accessible_url = s3.getSignedUrl('getObject', params)
      res.status(200).json({
        message: "Thumbnail Updated Successfully.",
        url: accessible_url
      });
    });
  });
////////////////////////////////////////////////////////////////
//////////// Delete Template ////////////
////////////////////////////////////////////////////////////////
router.delete("/:id", (req, res, next) => {
    Template.deleteOne({_id: req.params.id}).then(result => {
      if (result.deletedCount == 0) {
        res.status(400).json({message: "Template with said ID does not exist"})
      } else {
            // Find keys with project path in S3
            const listParams = {
                Bucket: "drone-template-data",
                Prefix: req.params.id
            }
            s3.listObjects(listParams, function(err, data){
                if(err){ return res.status(400).json({message: err})}
                if(data.Contents.length){ // if there are files in S3 to delete
                    const deleteParams = {
                        Bucket: "drone-template-data",
                        Delete: {Objects:[]}
                    }
                    deleteParams.Delete.Objects = data.Contents.map((el) => {
                        return {Key: el["Key"]}
                    })
                    // Batch delete
                    s3.deleteObjects(deleteParams, function(err,data){
                        if(err){ return res.status(400).json({message: err}) } 
                        else { return res.status(200).json({ message: "Template Deleted Successfully"})}
                    })
                } else { // if there are no files in S3 to delete
                    res.status(200).json({ message: "Template Deleted Successfully"})
                }
            })
        }
    });
  });

module.exports = router;